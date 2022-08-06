<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="dark">
        <ion-title>Baliza</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" color="dark">
      <a @click="(ev) => { router.push('/stop/' + stop.id) }" v-for="stop in nearStops" v-bind:key="stop.id">
        <ion-card color="primary">
          <ion-card-header>
            <ion-card-title>{{ stop.name }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <p>Estás a {{ stop.distance }} metros de esta parada</p>
          </ion-card-content>
        </ion-card>

      </a>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { locate, micCircle, cash, repeat, accessibility } from "ionicons/icons";
import { useRouter } from 'vue-router';
import { StopService } from '@/services/StopService';

export default defineComponent({
  name: 'StopWatch',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    const router = useRouter();
    return {
      locate,
      micCircle,
      cash,
      repeat,
      accessibility,
      router
    }
  },
  async created(){
    const service = StopService.getInstance();
    const response = await service.getAll();
    const routes = response.data.rutas.map(({ id, Llegada, salida } : { id: string, Llegada: string, salida: string}) => ({
      id,
      name: `${Llegada} - ${salida}`,
      distance: 10
    }));
    this.nearStops = routes.sort((a: any, b: any) => a.distance - b.distance);
  },
  data() {
    return {
      nearStops: []
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
