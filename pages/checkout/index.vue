<script setup lang="ts">
const activeStep = ref(1);
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="p-10">
      <Stepper v-model:value="activeStep">
        <StepList class="flex justify-between relative">
          <Step v-slot="{ value, a11yAttrs }" as-child :value="1">
            <div class="" v-bind="a11yAttrs.root">
              <div
                class="flex flex-col justify-center items-center w-fit gap-10px"
              >
                <h3>Panier</h3>
                <div
                  :class="[
                    'rounded-full transition-colors duration-700 size-[46px] relative z-10',
                    {
                      'bg-purple-vapo': value <= activeStep,
                      'bg-[#F3F3F3]': value > activeStep,
                      'delay-500': value <= activeStep,
                    },
                  ]"
                ></div>
              </div>
            </div>
          </Step>
          <Step v-slot="{ value, a11yAttrs }" as-child :value="2">
            <div
              class="flex justify-center pl-16 w-fit"
              v-bind="a11yAttrs.root"
            >
              <div
                class="flex flex-col w-fit justify-center items-center gap-10px"
              >
                <h3>Identification</h3>
                <div
                  :class="[
                    'rounded-full transition-colors duration-700 size-[46px] relative z-10',
                    {
                      'bg-purple-vapo': value <= activeStep,
                      'bg-[#F3F3F3]': value > activeStep,
                      'delay-500': value <= activeStep,
                    },
                  ]"
                ></div>
              </div>
            </div>
          </Step>
          <Step v-slot="{ value, a11yAttrs }" as-child :value="3">
            <div class="items-end flex justify-end" v-bind="a11yAttrs.root">
              <div class="flex flex-col items-center w-fit gap-10px">
                <h3>Création de ticket</h3>
                <div
                  :class="[
                    'rounded-full transition-colors duration-700 size-[46px] relative z-10',
                    {
                      'bg-purple-vapo': value <= activeStep,
                      'bg-[#F3F3F3]': value > activeStep,
                      'delay-500': value <= activeStep,
                    },
                  ]"
                ></div>
              </div>
            </div>
          </Step>
          <div class="absolute w-[calc(100%-100px)] left-5 top-14">
            <ProgressBar
              :value="(activeStep - 1) * 48"
              class="w-full"
              :show-value="false"
            ></ProgressBar>
          </div>
        </StepList>
        <StepPanels class="mt-10">
          <StepPanel v-slot="{ activateCallback }" :value="1">
            <CheckoutPanier :activate-callback="activateCallback" />
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="2">
            <CheckoutIdentification :activate-callback="activateCallback" />
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="3">
            <UiTitle title="Création de ticket" />
            <div class="flex pt-6 justify-start">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                icon-pos="left"
                @click="activateCallback(2)"
              />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
