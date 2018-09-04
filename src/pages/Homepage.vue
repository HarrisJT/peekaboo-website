<template lang="pug">
    main
        //- Summary
        section.summary
            .summary-child
                img.child(src="../assets/img/children/girl-pink-hair.svg")
            .container.text-center
                h2.pb-5.pt-3 Welcome to Peek-a-boo Pediatric Therapy LLC!
                h4 Peek-A-Boo Pediatric Therapy provides occupational therapy services to children birth to 3 years old and their families in the Denver-metro area.
                br
                h4 We provide services in environments where your child experiences the most; your home, your daycare or in the community.
                br 
                h4 We are named Peek-A-Boo Pediatric Therapy because every child should have the opportunity to play the game of peek-a-boo with their parents, siblings, grandparents and any other person in their life. 
        section.services
            .container
                h2.text-center Our Services
                h4.text-center Our therapists are experts in all aspects of your child's development.
                .services-child
                    div.helper-div
                    img.child(src="../assets/img/children/girl-black-hair.svg")
                    div.blue-box
                        h5(style="padding: 10px 0px 0px 10px;") We look at the child in 
                        ul.p-3
                            li 
                                h5 HOW
                                p they manage their body when happy, upset, nervous, etc.
                            li 
                                h5 HOW 
                                p they interact and react to different sensory experiences such as touch, taste, smell, sound, and what they look at.
                            li 
                                h5 HOW 
                                p they interpret how they move and understanding the components needed to play with toys and their caregivers.
                h4.text-center Our therapists are trained in 
                ul.treatments.text-left
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/red-crayon.svg")
                            h6 interoception
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/orange-crayon.svg")
                            h6 regulation
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/green-crayon.svg")
                            h6 sensory processing
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/yellow-crayon.svg")
                            h6 motor skills
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/purple-crayon.svg")
                            h6 play
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/blue-crayon.svg")
                            h6 social skills
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/red-crayon.svg")
                            h6 foundations for <br> speech and language
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/orange-crayon.svg")
                            h6 feeding
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/green-crayon.svg")
                            h6 visual impairments
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/yellow-crayon.svg")
                            h6 hearing impairments
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/purple-crayon.svg")
                            h6 assistive technology
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/blue-crayon.svg")
                            h6 NDT <br> (movement and handling)
                    li
                        div.treatment
                            img.crayon(src="../assets/img/crayons/red-crayon.svg")
                            h6 trauma and attachment
                div.diagnosis.text-center
                    h5 All to help with common childhood diagnosis such as:
                    p Sensory processing dysfunction &bull; Developmental delays &bull; Fine motor delays &bull; Gross motor delays &bull; Clumsy/discoordinated &bull; Autism &bull; Cerebral Palsy &bull; Childhood syndromes &bull; Neurological conditions &bull; Prematurity &bull; Orthopedic conditions &bull; Hyperactivity &bull; Learning disability &bull; Feeding delays &bull; Trauma &bull; And more
        //- Rates
        section.rates
            .rates-child
                img.child(src="../assets/img/children/boy-yellow-shirt.svg")
                .container.text-center
                    h2.pb-3 Our Rates
                    h4.text-center Early Intervention
                    h5.text-center We contract with the following community center boards:
                    .btn-group-vertical.regions
                        // a(href="https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/"): 
                        button.btn(onclick="location.href='https://www.dpcolo.org/our-programs/early-intervention-department/early-intervention-program/';" style="background-image: url('https://www.dpcolo.org/wp-content/uploads/2018/01/DP-LOGO-V.png')") 
                        br
                        // a(href="https://www.rmhumanservices.org/ei"): 
                        button.btn(onclick="location.href='https://www.rmhumanservices.org/ei';" style="background-image: url('https://static.wixstatic.com/media/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png/v1/fill/w_530,h_152,al_c,usm_0.66_1.00_0.01/c74773_0a1ad8f5ede04319a34a5a499ad76d26~mv2_d_4243_1215_s_2.png')")
                        br
                        // a(href="https://ddrcco.com/early-intervention/home"): 
                        button.btn(onclick="location.href='https://ddrcco.com/early-intervention/home';" style="background-image: url('https://ddrcco.com/images/brand/logo.png'")
                        br
                    div.blue-box
                        p.p-3 Early intervention is a state ran program for children that have minimal to moderate/severe delays in 1 or more areas of development. To see if your child qualifies you can call your local community center board intake coordinator to set up an initial evaluation. It is a no-cost to family program and in doing so they will attempt to bill insurance and medicaid. You will not have to worry about your deductible or co-pays through this program.
                        br
                        p If you wish to not go through the Early Intervention program we offer private pay rates. Please <a href="#">contact us</a> for more information.
        //- About us
        section.about
            .container
                h2 Meet the <br> Therapists
                div.about-child
                    div.helper-div
                    img.child(src="../assets/img/children/girl-apple.svg")
                    .card.employee
                        .card-body
                            img.float-left.headshot.pr-3(src="../assets/img/employees/amanda-headshot.jpg" alt="Amanda Shimkus")
                            h3.card-title Amanda Shimkus
                            .card-text
                                h6.text-muted MA, OTR/L SIPT Certified
                                h6.job-title Owner, Occupational Therapist
                            a.card-link(href="#") Read about me!
                    br
                    .card.employee
                        .card-body
                            img.float-left.headshot.pr-3(src="../assets/img/employees/lindsey-headshot.jpg" alt="Lindsey Blanke")
                            h3.card-title Lindsey Blanke
                            .card-text
                                h6.text-muted OTR/L
                                h6.job-title Occupational Therapist
                            a.card-link(href="#") Read about me!
                    br
                    .card.employee
                        .card-body
                            img.float-left.headshot.pr-3(src="../assets/img/employees/nicole-headshot.jpg" alt="Nicole Green")
                            h3.card-title Nicole Green
                            .card-text
                                h6.text-muted OTD, OTR/L
                                h6.job-title Occupational Therapist
                            a.card-link(href="#") Read about me!
                    br
                    .card.employee
                        .card-body
                            img.float-left.headshot.pr-3(src="../assets/img/employees/libby-headshot.jpg" alt="Libby Cronin")
                            h3.card-title Libby Cronin
                            .card-text
                                h6.text-muted MS, OTR/L
                                h6.job-title Occupational Therapist
                            a.card-link(href="#") Read about me!
                    br
                    .card.employee
                        .card-body
                            img.float-left.headshot.pr-3(src="../assets/img/employees/lara-headshot.png" alt="Lara Dato")
                            h3.card-title Lara Dato
                            .card-text
                                h6.text-muted MS, OTR/L
                                h6.job-title Occupational Therapist
                            a.card-link(href="#") Read about me!
                    br
        footer
            .footer-child
                div.helper-div
                img.child(src="../assets/img/children/boy-red-shirt.svg")
                .container-fluid.footer-wrapper
                    hr
                    div.feedback-form
                        h2 Leave us some feedback!
                        form
                            label Email
                            input(type="text" value="email" placeholder="Email")
                    div.footer-links
                        .row
                            .col
                                h4 Contact us!
                                .row
                                    .col
                                        span
                                        i.fa.fa-phone-square.d-inline-block
                                        h6.d-inline-block Phone: (303) 885-9848
                                .row
                                    .col
                                        span
                                        i.fa.fa-fax.d-inline-block
                                        h6.d-inline-block Fax: (303) 200-7001
                                .row
                                    .col
                                        span
                                        i.fa.fa-envelope.d-inline-block
                                        h6.d-inline-block Email: a.shimkus@peekabootherapy.com
                        .row
                            .col
                                h4 Employment
                                h6 Are you an occupational therapist and interested in joining our team? <br>
                                h6 Click <router-link to="/careers">here</router-link> to fill out an application!
                                // a(href="#")
                                //     h4 Leave us some feedback!
                    div.copyright
                        // .row
                        //   .col-sm-6
                        h6 ©2018 Peek-a-boo Pediatric Therapy LLC, <br> All Rights Reserved. 
                        // .col-sm-6
                        span.acknowledgments
                            p Logo and children designed and created by Jesey Nicholson
                            p Website designed and developed by Elliot Braem
</template>

<script>
export default {
}
</script>