<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-button @click="() => {router.back()}">
            <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Esperando bus...</ion-title>
        <ion-buttons slot="end">
          <ion-button id="open-assistance" expand="block">
            <ion-icon slot="icon-only" :icon="accessibility"></ion-icon>
          </ion-button>
          <ion-button id="open-modal" expand="block">
            <ion-icon slot="icon-only" :icon="locate"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" color="dark">
      <ion-card color="success">
        <ion-card-content>
          <p>Visto por última vez en parada #1</p>
        </ion-card-content>
      </ion-card>
      <div id="container">
        <ion-list>
          <ion-item color="dark">
            <ion-label>
              <h3>Ruta</h3>
              <p>Tres Ríos - San José</p>
            </ion-label>
          </ion-item>
          <ion-item color="dark">
            <ion-label>
              <h3>Esperando en parada</h3>
              <p>#3</p>
            </ion-label>
          </ion-item>
          <ion-item color="dark">
            <ion-label>
              <h3>Ubicación</h3>
              <p>Frente al AMPM de Tres Ríos</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-title style="font-weight: 100;">Información de la ruta</ion-title>
        <div class="stop-info">
          <div class="icon-wrapper color-1">
            <ion-icon slot="icon-only" :icon="cash"></ion-icon>
          </div>
          <span class="label">Costo:</span>
          <span class="value color-1">c500</span>
        </div>

        <div class="stop-info">
          <div class="icon-wrapper color-2">
            <ion-icon slot="icon-only" :icon="repeat"></ion-icon>
          </div>
          <span class="label">Frecuencia:</span>
          <span class="value color-2">Cada 15 minutos</span>
        </div>

      </div>


      <ion-modal id="location-modal" ref="modal" trigger="open-modal" :initial-breakpoint="0.30"
        :breakpoints="[0, 0.30]">
        <ion-content class="ion-padding" color="primary">
          <ion-card color="dark">
            <ion-card-header>
              <ion-card-title>Te encuentras a xx metros de la parada</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>Puedes activar el emisor de sonido para localizar más facilmente la parada</p>
              <ion-button color="primary" expand="block">
                <ion-icon slot="icon-only" :icon="micCircle"></ion-icon>
                <span style="padding-left: 20px;">Activar sonido</span>
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </ion-modal>

      <ion-modal id="location-modal" ref="modal" trigger="open-assistance" :initial-breakpoint="0.30"
        :breakpoints="[0, 0.30]">
        <ion-content class="ion-padding" color="primary">
          <ion-card color="dark">
            <ion-card-header>
              <ion-card-title>¿Deseas solicitar asistencia para ingresar al bus?</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <p>Puedes indicar al personal conductor ayuda anticipada para ingresar al autobus</p>
              <ion-button color="primary" expand="block">
                <ion-icon slot="icon-only" :icon="accessibility"></ion-icon>
                <span style="padding-left: 20px;">Solicitar asistencia</span>
              </ion-button>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonModal } from '@ionic/vue';
import { defineComponent } from 'vue';
import { locate, micCircle, cash, repeat, accessibility, arrowBack } from "ionicons/icons";
import { useRouter } from 'vue-router';
import { StopService } from '@/services/StopService';

export default defineComponent({
  name: 'StopWatch',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonModal
  },
  setup() {
    const router = useRouter();
    return {
      locate,
      micCircle,
      cash,
      repeat,
      accessibility,
      arrowBack,
      router
    }
  }
});
</script>

<style scoped>
#container ion-list {
  background: #1e2b43;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

#location-modal {
  --max-height: 780px;
}

ion-header::after {
  background-image: none;
}

.color-1 {
  color: rgb(64, 190, 81);
}

.color-2 {
  color: rgb(178, 149, 46);
}

.stop-destiny-wrapper {
  display: flex;
  padding: 10px;
}

.stop-destiny {
  border: 1px solid #3d5482;
  margin: 5px;
  min-height: 50px;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.stop-destiny .label {
  font-size: 0.7em;
}

.stop-destiny .value {
  font-weight: bold;
}

.stop-info {
  background-color: #2c3d5e;
  border: 1px solid #CCC;
  border-radius: 3px;
  padding: 20px;
  margin: 15px 15px 15px 50px;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
}

.stop-info .icon-wrapper {
  background-color: #1e2b43;
  border: 1px solid #FFF;
  border-radius: 50%;
  position: absolute;
  font-size: 1.5em;
  left: -20px;
  top: 13px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stop-info .label {
  color: #7590c6;
  margin-left: 20px;
}

.stop-info .value {
  font-weight: bold;
  font-size: 1.3em;
  margin-left: auto;
  margin-right: 20px;
  text-align: right;
}
</style>
