<template>
  <div class="home">
    <topbar />
    <intro />
    <main>
      <div class="container">
        <div class="content-element">
          <h2 class="title is-2">About</h2>
          <plaintext>
          <template #content>
            <p class="important">
              NxGG ist eine E-Sports Organisation. Ihr könnt unser Team
              unterstützen, indem ihr unseren Kanal anschaut, an unseren Turnieren
              teilnehmt und uns auf den sozialen Medien folgt.
            </p>
          </template>
        </plaintext>
        </div>
        <div class="content-element">
          <h2 class="title is-2">Team</h2>
          <div class="columns">
            <div class="column">
              <employee>
                <template #image>
                  <img src="../assets/theme/member.png" alt="Alex" />
                </template>
                <template #name> Alexandro Muñoz Vidal </template>
              </employee>
            </div>
            <div class="column">
              <employee>
                <template #image>
                  <img src="../assets/theme/member_2.png" alt="Alex" />
                </template>
                <template #name> Davide Lo Cascio </template>
              </employee>
            </div>
            <div class="column">
              <employee>
                <template #image>
                  <img src="../assets/theme/member_3.png" alt="Alex" />
                </template>
                <template #name> Suki Lorem </template>
              </employee>
            </div>
            <div class="column">
              <employee>
                <template #image>
                  <img src="../assets/theme/member_4.png" alt="Alex" />
                </template>
                <template #name> Devin Sit Amet </template>
              </employee>
            </div>
          </div>
        </div>
        <div class="content-element">
          <h2 class="title is-2">News</h2>
          <div class="columns">
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">
                    E-Sports conference to take place in sweden
                  </h3>
                </template>
              </teaser>
            </div>
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser_2.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">The future of VR gaming</h3>
                </template>
              </teaser>
            </div>
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">
                    E-Sports conference to take place in sweden
                  </h3>
                </template>
              </teaser>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-1 extra-spacing--regular">
              <button class="button is-primary">All news</button>
            </div>
          </div>
        </div>
        <div class="content-element">
          <h2 class="title is-2">Upcoming events</h2>
          <div class="columns">
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">
                    E-Sports conference to take place in sweden
                  </h3>
                </template>
              </teaser>
            </div>
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser_2.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">The future of VR gaming</h3>
                </template>
              </teaser>
            </div>
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">
                    E-Sports conference to take place in sweden
                  </h3>
                </template>
              </teaser>
            </div>
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">
                    E-Sports conference to take place in sweden
                  </h3>
                </template>
              </teaser>
            </div>
            <div class="column is-4">
              <teaser>
                <template #image>
                  <img src="../assets/theme/teaser_2.png" alt="Teaser" />
                </template>
                <template #date> 20.9.2021 </template>
                <template #title>
                  <h3 class="title is-3">
                    E-Sports conference to take place in sweden
                  </h3>
                </template>
              </teaser>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-1 extra-spacing--regular">
              <button class="button is-primary">All events</button>
            </div>
          </div>
        </div>
        <div class="content-element">
          <h2 class="title is-2">Our partners</h2>
          <div class="partners">
            <div class="columns">
              <div class="column">
                <partner>
                  <template #image>
                    <img src="../assets/theme/partner_1.png" alt="Partner" />
                  </template>
                </partner>
              </div>
              <div class="column">
                <partner>
                  <template #image>
                    <img src="../assets/theme/partner_2.png" alt="Partner" />
                  </template>
                </partner>
              </div>
              <div class="column">
                <partner>
                  <template #image>
                    <img src="../assets/theme/partner_3.png" alt="Partner" />
                  </template>
                </partner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <footer-content />
    </footer>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Intro from "../components/Intro.vue";
import Plaintext from "../components/Plaintext.vue";
import Employee from "../components/Employee.vue";
import Teaser from "../components/Teaser.vue";
import Partner from "../components/Partner.vue";
import FooterContent from "../components/FooterContent.vue";

export default {
  name: "Home",
  components: {
    Topbar,
    Intro,
    Plaintext,
    Employee,
    Teaser,
    Partner,
    FooterContent,
  },
};
</script>
