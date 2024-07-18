<template>
  <div :class="props.keyboardClass"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import layout from "simple-keyboard-layouts/build/layouts/french";

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

const emit = defineEmits(["onChange", "onKeyPress"]);

const keyboard = ref<Keyboard | null>(null);

onMounted(() => {
  keyboard.value = new Keyboard(props.keyboardClass, {
    onChange,
    onKeyPress,
    layout: {
      default: [
        "0 1 2 3 4 5 6 7 8 9",
        "a z e r t y u i o {bksp}",
        "p q s d f g h j k {enter}",
        "l m w x c v b n {lock}",
        ". , {space} - _",
      ],
      shift: [
        "0 1 2 3 4 5 6 7 8 9",
        "A Z E R T Y U I O {bksp}",
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
    ],
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
