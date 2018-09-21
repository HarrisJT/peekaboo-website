<template lang="pug">
    main
        section.application
            .container
                .row
                    .col-8.col-offset-2
                        form(id="application")
                            div.form-group
                                label(for="firstName") Full Name
                                input(id="firstName" type="text" v-model.trim="firstName" placeholder="First")
                                input(type="text" v-model.trim="middleName" placeholder="Middle")
                                input(type="text" v-model.trim="lastName" placeholder="Last")
                            //- div.form-group
                            //-     label(for="streetName") Current Address
                            //-     input(id="streetName" type="text" v-model.trim="streetName" placeholder="Street")
                            //-     input(type="text" v-model.trim="city" placeholder="City")
                            //-     input(type="text" v-model.trim="state" placeholder="State")
                            //-     input(type="text" v-model.trim="zipcode" placeholder="Zipcode")

                //- input(v-model="phoneHome" placeholder="Home")
                //- input(v-model="phoneMobile" placeholder="Mobile")
                //- input(v-model="email" placeholder="Email")

                //- input(v-model="ref1Name" placeholder="Name")
                //- input(v-model="ref1Phone" placeholder="Phone")
                //- input(v-model="ref1Occupation" placeholder="Occupation")
                //- input(v-model="ref1Years" placeholder="Years Known")

                //- input(v-model="ref2Name" placeholder="Name")
                //- input(v-model="ref2Phone" placeholder="Phone")
                //- input(v-model="ref2Occupation" placeholder="Occupation")
                //- input(v-model="ref2Years" placeholder="Years Known")

                //- input(v-model="ref3Name" placeholder="Name")
                //- input(v-model="ref3Phone" placeholder="Phone")
                //- input(v-model="ref3Occupation" placeholder="Occupation")
                //- input(v-model="ref3Years" placeholder="Years Known")

                //- input(v-model="prevEmpl1Name" placeholder="Name")
                //- input(v-model="prevEmpl1Sup" placeholder="Supervisor")
                //- input(v-model="prevEmpl1Phone" placeholder="Phone")
                //- input(v-model="prevEmpl1Salary" placeholder="Final Salary")
                //- input(v-model="prevEmpl1Reason" placeholder="Reason for Leaving?")

                //- input(v-model="prevEmpl2Name" placeholder="Name")
                //- input(v-model="prevEmpl2Sup" placeholder="Supervisor")
                //- input(v-model="prevEmpl2Phone" placeholder="Phone")
                //- input(v-model="prevEmpl2Salary" placeholder="Final Salary")
                //- input(v-model="prevEmpl2Reason" placeholder="Reason for Leaving?")

                //- input(v-model="school" placeholder="School")
                //- input(v-model="gradYear" placeholder="Year Graduated")
                //- input(v-model="nbcot" placeholder="NBCOT #")
                //- input(v-model="expDate" placeholder="Date Expires")
                //- input(v-model="license" placeholder="Colorado Licensure #")

                //- input(v-model="currPosition" placeholder="Current position desired")
                //- input(v-model="desiredRate" placeholder="Desired rate for service")
                //- input(v-model="desiredHours" placeholder="Desired Hours per week")



</template>

<script>
export default {
    data: () => ({
        firstName: null,
        middleName: null,
        lastName: null
    })
}
</script>



//   .container
//     br
//     .card
//       .card-body
//         div.checkout
//           h4 DADOS DO PAGAMENTO
//           hr
//           .row
//             .col-sm-8
//               form(@submit.prevent="handleSubmit")
//                 div.form-group
//                   // label Nome impresso no Cartão
//                   input.form-control(type="text" v-model.trim="$v.holderName.$model" placeholder="Nome impresso no Cartão" :class="[$v.holderName.$dirty ? [$v.holderName.$error ? 'invalid' : 'valid'] : '']" :disabled="loading")
//                   .form-field-invalid(v-if="!$v.holderName.required && $v.holderName.$dirty") Por favor preencha este campo.
//                 div.form-group
//                     div.form-row
//                         div.col-9
//                             // label Número do Cartão
//                             div
//                               the-mask.form-control(mask="#### #### #### ####" type="tel" masked=false placeholder="Número do Cartão" v-model.trim="$v.cardNumber.$model" :class="[$v.cardNumber.$dirty ? [$v.cardNumber.$error ? 'invalid' : 'valid'] : '']" :disabled="loading")
//                               p.cardTypeField {{this.cardType}}
//                             .form-field-invalid(v-if="!$v.cardNumber.required && $v.cardNumber.$dirty") Por favor preencha este campo.
//                             .form-field-invalid(v-if="!$v.cardNumber.isPotentialCard && !$v.cardNumber.isValidCard && $v.cardNumber.$dirty") Precisa ser um número de cartão de crédito válido.
//                         div.col-3
//                             // label CVV
//                             the-mask.form-control(mask="####" type="tel" masked=false placeholder="CVV" v-model.trim="$v.cvv.$model" :class="[$v.cvv.$dirty ? [$v.cvv.$error ? 'invalid' : 'valid'] : '']" :disabled="loading")
//                             .form-field-invalid(v-if="!$v.cvv.required && $v.cvv.$dirty") Por favor preencha este campo.
//                 div.form-group
//                     div.form-row
//                         div.col
//                             // label Mês de Vencimento
//                             select.form-control(v-model="$v.expirationMonth.$model" :class="[$v.expirationMonth.$dirty ? [$v.expirationMonth.$error ? 'invalid' : 'valid'] : '']" :disabled="loading")
//                               option(value="0" hidden) Mês de Vencimento
//                               option(v-for="month in availableMonths" :key="month.value" :value="month.value")
//                                 | {{ month.id }}
//                             .form-field-invalid(v-if="!$v.expirationMonth.required && $v.expirationMonth.$dirty") Por favor preencha este campo.
//                         div.col
//                             // label Ano de Vencimento
//                             select.form-control(v-model="$v.expirationYear.$model" :class="[$v.expirationYear.$dirty ? [$v.expirationYear.$error ? 'invalid' : 'valid'] : '']" :disabled="loading")
//                               option(value="0" hidden) Ano de Vencimento
//                               option(v-for="year in availableYears" :key="year" :value="year")
//                                 | {{ year }}
//                             .form-field-invalid(v-if="!$v.expirationYear.required && $v.expirationYear.$dirty") Por favor preencha este campo.
//                 div.form-group
//                     // label CPF
//                     the-mask.form-control(mask="###.###.###-##" type="tel" masked=false placeholder="CPF" v-model="$v.document.$model" :class="[$v.document.$dirty ? [$v.document.$error ? 'invalid' : 'valid'] : '']" :disabled="loading")
//                     .form-field-invalid(v-if="!$v.document.required && $v.document.$dirty") Por favor preencha este campo.
//                 .form-group
//                     p
//                         | Ao clicar em <strong>Pagar Agora</strong>, você concorda com nossos
//                         a(href="https://marketplace.produzz.com.br/termos-de-uso/" target="_blank") <strong>Termos de Uso</strong>
//                         | .
//                 button.btn.btn-outline-primary.btn-block( type="submit") Pagar Agora
//                 //:disabled="$v.$invalid || loading "
//             .col-sm-4
//               .cart-description
//                 h5 Resumo do Pedido
//                 p.description {{ product.desc }}
//                 p
//                   | Subtotal:
//                   span.float-right {{ product.amount }}
//                 p
//                   | Descontos:
//                   span.float-right R$ 0,00
//                 hr
//                 p.total.mt-2
//                   | Total a pagar:
//                   span.float-right.amount <strong>{{ product.amountPretty }}</strong>
//       div.loader(v-show="loading")
//         grid-loader(:loading="loading" :color="color")
//     button.btn.btn-link(style="font-size: .8rem" v-on:click="getReferrer") Cancelar e continuar comprando

// </template>

// import { required, minLength, between } from 'vuelidate/lib/validators'
// import axios from 'axios'
// import url from 'url'
// import gatewayApi from '../gateway-api'
// import GridLoader from 'vue-spinner/src/GridLoader.vue'
// var valid = require('card-validator');

// function isPotentialCard() {
//   var validation = valid.number(this.cardNumber);
//   if(validation.card === null){
//     this.cardType = null;
//   }
//   else if (validation.isPotentiallyValid) {
//     this.cardType = validation.card.niceType;
//   }
//   return validation.isPotentiallyValid;
// }

// function isValidCard() {
//   var validation = valid.number(this.cardNumber);
//   return validation.isValid;
// }

// export default {
//   data: () => ({
//     holderName: null,
//     cardNumber: null,
//     cvv: null,
//     expirationMonth: 0,
//     expirationYear: 0,
//     document: null,
//     cardType: null,

//     loading: false,
//     color: '#007bff',
//   }),
//   computed: {
//     product: () => Object.assign({}, window.product),
//     customer: () => Object.assign({}, window.customer),
//     availableMonths: () => [
//       { id: "Janeiro", value: 1 },
//       { id: "Fevereiro", value: 2 },
//       { id: "Março", value: 3 },
//       { id: "Abril", value: 4 },
//       { id: "Maio", value: 5 },
//       { id: "Junho", value: 6 },
//       { id: "Julho", value: 7 },
//       { id: "Agosto", value: 8 },
//       { id: "Setembro", value: 9 },
//       { id: "Outubro", value: 10 },
//       { id: "Novembro", value: 11 },
//       { id: "Dezembro", value: 12 }
//     ],
//     availableYears() {
//       let years = []

//       for (let i = 2018; i < 2051; i++)
//         years.push(i)

//       return years
//     }
//   },
//   methods: {
//     getReferrer: function () {
//       var referrer = url.parse(document.referrer.toString())
//       window.location = url.format({
//         host: referrer.host,
//         query: {
//           "total_amount": window.product.amount,
//           "product_count": 1,
//           "user_id": window.customer.user_id,
//           "continue": "true"
//         }
//       })
//     },
//     async handleSubmit() {
//       try {
//         this.loading = true;

//         const transaction = {
//           holderName: this.holderName,
//           cardNumber: this.cardNumber,
//           cvv: this.cvv,
//           expirationMonth: this.expirationMonth,
//           expirationYear: this.expirationYear,
//           document: this.document,
//           amount: this.product.amount,
//           description: this.product.desc
//         }

//         if (await gatewayApi(this.customer.key).createCharge(transaction)) {
//           window.location.href = this.customer.return_url
//         } else {
//           alert('Transação não autorizada.')
//         }
//       } catch (err) {
//         console.error(err)
//         alert('Não conseguimos completar sua transação, por favor verifique seus dados e tente novamente.')
//       } finally {
//         this.loading = false
//       }
//     }
//   },
//   validations: {
//     holderName: { required },
//     cardNumber: { required, isPotentialCard, isValidCard},
//     cvv: { required, minLength: minLength(3) },
//     expirationMonth: { required, between: between(1, 12) },
//     expirationYear: { required, between: between(2018, 2050) },
//     document: { required, minLength: minLength(11) }
//   },
// };
// </script>


<style lang="scss">

</style>
