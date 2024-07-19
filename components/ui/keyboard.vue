<template>
  <div :class="props.keyboardClass"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
// import layout from "simple-keyboard-layouts/build/layouts/french";

const props = defineProps({
  keyboardClass: {
    default: "simple-keyboard",
    type: String,
  },
  input: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["onChange", "onKeyPress", "onEnter"]);

const keyboard = ref<Keyboard | null>(null);

onMounted(() => {
  keyboard.value = new Keyboard(props.keyboardClass, {
    onChange,
    onKeyPress,
    layout: {
      default: [
        "0 1 2 3 4 5 6 7 8 9",
        "a z e r t y u i o {backspace}",
        "p q s d f g h j k {enter}",
        "l m w x c v b n {lock}",
        ". , {space} - _",
      ],
      shift: [
        "0 1 2 3 4 5 6 7 8 9",
        "A Z E R T Y U I O {backspace}",
        "P Q S D F G H J K {enter}",
        "L M W X C V B N {lock}",
        ". , {space} - _",
      ],
    },
    buttonTheme: [
      {
        class: "!w-1/2",
        buttons: "{space}",
      },
      {
        class: "!w-[50px]",
        buttons: "{backspace}",
      },
      {
        class: "!w-[50px]",
        buttons: "{enter}",
      },
    ],
    display: {
      "{backspace}": `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.07716 1.90358C8.42031 1.46811 8.42031 0.762075 8.07716 0.326604C7.73402 -0.108868 7.17767 -0.108868 6.83452 0.326604L0 9L6.83452 17.6734C7.17767 18.1089 7.73402 18.1089 8.07716 17.6734C8.42031 17.2379 8.42031 16.5319 8.07716 16.0964L3.30152 10.0358H17.1213C17.6066 10.0358 18 9.5366 18 8.92075C18 8.3049 17.6066 7.80566 17.1213 7.80566H3.42641L8.07716 1.90358Z" fill="white"/>
        </svg>
        `,
      "{enter}": `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2426 10.929H4.51468L9.94971 16.364C10.3402 16.7545 10.3402 17.3877 9.94971 17.7782C9.55919 18.1687 8.92602 18.1687 8.5355 17.7782L0.757324 10L8.5355 2.22185C8.92602 1.83132 9.55919 1.83132 9.94971 2.22185C10.3402 2.61237 10.3402 3.24554 9.94971 3.63606L4.65682 8.92896H19.2426V1.92896C19.2426 1.37667 19.6903 0.928955 20.2426 0.928955C20.7949 0.928955 21.2426 1.37667 21.2426 1.92896V9.92896C21.2426 10.4812 20.7949 10.929 20.2426 10.929Z" fill="white"/>
        </svg>
        `,
      "{space}": " ",
      "{lock}": "Caps",
    },
  });
});

function onChange(input: string) {
  emit("onChange", input);
}

function onKeyPress(button: string) {
  emit("onKeyPress", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
  if (button === "{enter}") emit("onEnter");
}

function handleShift() {
  if (!keyboard.value) return;

  const currentLayout = keyboard.value.options.layoutName;
  const shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.value.setOptions({
    layoutName: shiftToggle,
  });
}

watch(
  () => props.input,
  (newInput) => {
    if (keyboard.value && newInput !== undefined) {
      keyboard.value.setInput(newInput);
    }
  },
);
</script>

<style>
.hg-button:not(.hg-button-enter) {
  height: 68px !important;
  background: #0e0e0e !important;
  color: white;
}
.hg-button-enter {
  height: 68px !important;
  background: #793282 !important;
  color: white;
}
</style>
