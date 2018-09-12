<template lang="pug">
    main
        section.application
            form(id="application")
                input(v-model="firstName" placeholder="First")
                input(v-model="middleName" placeholder="Middle")
                input(v-model="lastName" placeholder="Last")

                //- input(v-model="streetName" placeholder="Street")
                //- input(v-model="city" placeholder="City")
                //- input(v-model="state" placeholder="State")
                //- input(v-model="zipcode" placeholder="Zipcode")

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
    el: '#application',
}
</script>