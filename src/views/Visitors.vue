<template>
  <div>
        <b-table striped hover :fields="fields" :items="visitors">
          <template v-slot:cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">{{row.detailsShowing ? 'Hide' : 'Show'}}</b-button>
          </template>
          <template v-slot:row-details="row">
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
                <b-col>{{row.item.name}}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Surname:</b></b-col>
                <b-col>{{row.item.surname}}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Contact:</b></b-col>
                <b-col>{{row.item.contact}}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Comment:</b></b-col>
                <b-col>{{row.item.comment}}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Feed back:</b></b-col>
                <b-col>{{row.item.feedback}}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Can we visit at your home:</b></b-col>
                <b-col>{{row.item.canWeVisit}}</b-col>
              </b-row>
            </b-card>
          </template>
        </b-table>
  </div>
</template>

<script>
export default {
    name: 'visitors',
    data(){
      return{
        visitors:[
          {id:'1',
           title:'Mr',
            name:'gift',
            surname:'Ramashia',
            comment:'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
            feedback:'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
            canWeVisit:'Yes',
            contact:'01233444'
          },
          { id:'2',
            title:'Mr',
            name:'Frans',
            surname:'Kgosana',
            comment:'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
            feedback:'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
            canWeVisit:'No',
            contact:'02443434'
          },
          { id:'3',
            title:'Mr',
            name:'Phuti',
            surname:'Mathopa',
            comment:'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
            feedback:'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
            canWeVisit:'Yes',
            contact:'01233444'
          }
        ],
        fields: [
           'title',
           {key:'name',
           label:"Name"},
           'surname','show_details'
        ]
      }
    },
    methods:{

    }
}
</script>

<style>

</style>