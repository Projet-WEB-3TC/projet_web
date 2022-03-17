<template>
  <div id="app" >
      <v-card dark max-width="99%">
        <v-container fluid>
          <v-row
          >
            <v-col cols="12">
                <!-- a modifier pour recupe la date d'anniv style="justify-content: center" max-width="80%
                <v-row align="center">
                  <v-col cols="12">-->
              <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
                <v-autocomplete
                  auto-select-first
                  v-model="value"
                  :items="items"
                  dense
                  label="Prénom Nom"
                ></v-autocomplete>
                <v-spacer></v-spacer>
                <!--<v-icon>mdi-magnify</v-icon>-->
                <v-spacer></v-spacer>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-container fluid>
        <v-row dense>
          <v-col 
            :cols="6"
            v-for="(items, i) in items"
            :key="i">
            <v-card
              dark
              class="mx-auto"
            ><!--on peut ajouter max-width="180px"-->

              <v-img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUXGBcaGhweGxsbGxscHRwbHBogHR0gIBsbICwkHR0pIhscJTYmKS4wMzMzGiI5PjkxPSwyMzABCwsLEA4QHhISHjIpJCoyMjQyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAN8A4gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgcBAP/EAEIQAAECBAMFBgQEBQMCBwEAAAECEQADITEEEkEFIlFhcQYTMoGRoUKxwfBS0eHxFCNicpIHgqIVMyRDU7KzwtIW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUA/8QAJhEAAgICAgICAgMBAQAAAAAAAAECEQMhEjEEQSJRE2FxgZHwMv/aAAwDAQACEQMRAD8A5g8XylRUmYoJUkGigHFKsQR7iJyyIuEGo7PYELCpi3YAhIFydW++MF7OlJUvKnNlTUgAZvPhHvZIoWqWhyCpWUlJ8IyNW404fOCJuKRhZkwSkVVl3kgkeIqykZaUaj/EaQDbsNM2EwuAHawT5gMCIswckFZUBSxPPlyinC4dXdIWpsxAPdgF0hWU3NjV20zNpB+AmDKUpZnB9frC+WhtmN7QqWZrLIoN0CwB+sBIRGuxuFC5jzBuMyTShrU8i8R2nhJIlsGMxwzM/O2jRZinpI3gYDaWFLPGZnpIJ9o3+Pwm7SMjtDCl3jckRc4NAAm7zmlXoABzoLQ1weM3hWkKRLqAosHDmpYEsSwvSK0LyKIdwCcpqKPQto/C9YXCbgxbVmzBChAi9lTJqiJaXa5oAHs6jQE6C50eKtmz3ALxrJGGph86srLWpKC+ZRVlykJ0BbxFqWe0WTyXEVx2c+xeFCZcuYCd8rccMpS3zgKXGixGCXMlyES0lSnmlhoAUOSTRKRqSwELtpIQlMuWlSVqQFd4tHhJUpwAogZ2DB7VoSKxM9P/AExMhJmtDCTimEIVkiJJnmM5tHuNmhVj4DnYp4Xd/Ee8Kt0M5PFvc0jznZqiHIUta01dPIgsBxHHrBW0JmVAQgOpW6BrapijColyy61MrmU+wBLRbiMXKBzvmUAwAPHgLPGHieFwCUEECoS3nqYqmbOSCpSRmJdgbOdSYnhtohaSog0NgCSAbWgvDqKj4WGj38xwjFRjsD2ZgFg77ZR8I1OhpG12RMKpagAXysA7O3zpAmzcNmTQAO5NagcOVBB2FQJaMyioMqhpY0yjj1gZyCiiSpa1S1zX3UBQ5BRScula7sZbamyF4gDEJ3SkBMwHQDeceSvaN1gAmXLImHxvmQqu6WZki1becH4PBZlEBTIKfCoCrix4D8oVdOxtao5f/wBclp3SiooakVFDR6R9Gs//AJNX/pyf8FR7B2gKZyoHlHoj5I+2j0iCNCsJilyyFy1ZVJLuOI9j+8PNn4tUwqVNqq5XYk8GFFFtKWvaM3KZw9nHzjUYFReWEpBKgSDQgGzu1wwjGajoey8X3mHBSGWkIzBmsyATWgZPtAiMPMTLWpc0KWoEgCgD2cnS9uMUdlpy5hmpLtkKczM5Yk21G7BOAUVyFKW7ZyUm5ATUCtmKbQnoYmIpO28+VGYjL9/SGmHVnEYhGKeYZig2dSlealEmHWy9pK7xgae0U45cR8J6NH/CveM9tXZDktGmw+1E5gh6xTj0gmKdSNkuS2c8xmz2FoT4nDFJtHQZuHBNYU43Y5U5SKxmTEqtEvF2Kuzq8uIk8DMQ/wDkI1+z5KiuVMmKKSsukKBK1mhcg+EVBJVVjQGMxsrClGKkmoImIPQhQ/KLNk7WyCS+8tC1rVmcvmyXLuXIL1eFRck+K9gSWtl+0Fr/AIeVLBIQVTCpIsSCln4to9ozsxFY0+PnKmMSaAMAAAlI4JSKAfZhVNwusU/ibJ5SSFC0QMtLQzXJaB1ynhOTGwoSAkq5tT9fpEXi+bJaKssTvXY9KyLfT3j5Hr+sTyRMS0tUl+DU9XjLN4MMwmPXmSkBITZgGAB1cVfm8OkYhCc285AGtHsA9nZzCCZhMrZV5sw+EG3PlBWG2YtQrugnV3pyjU2A4DvC9oJSFgSpSyoneKljLZqAPSG+HxZWFInnKq6CkAIFDRRJJIdjmBFmZqwg2HhJSZtVZyCGQGc1YufhqR7Q12f2pRMQqTi0pWnMe7yIyTJfFLJSAUj8JrTWBmvoOKLpe0CubLQklCkhpi16AFrHUlh0jc4TabKCUIzJTkexKkmiiCSxJ5mjxicTsNE6UqbIWCpCd1SXqijg8xwuz8AIW9m8NNSkzUzFJKVEFAahBbfHDn7wLqSPbTOqS0hh4rfhP5R9CWUuZlG/MsNBw6x7C+JtnF0x7l5t98olNQxMe5TwiimAtlBpBuAxq0gBKiMpzAPcawNMQYuwGDUtYCfGTuC7m56AAGto80eRr9idplSJiJWQrlTAFBQzFSM2ZJOUeIeF+DG8ajaWJlokISlZVnKyo1FiKbwFRZ20MJhIlypEs5e8WnMMgNCXzZjqQ+YhOgIu8AbexpVhkzi4UtRCU0YBO6rLyc/KFcbYV0ZvETv5hDUrB+AmF6vXXyhXiMVnylmUBU8a0trX2g3BYlOVRNFJ8nPDjFUI2B+Tix3Jn5FAmjamG8jFd4pnsHjKbSXMmGXMloV4HLJzAKS4JLC9CWej6wGJ88JmHvCcxygpYUBcs1R66R5Jp0GvJVWbqfLaPJK9DGI2bttcolJAIIq+Y7wpmJK6E1duAjUbN2nKmpStChmI3kPvJOoa5bjYw6OVdMZGSltHu3cOMrgecYhZUlZIFqx0TEsuWRelowO0ZbKNLQOWNbQM6vY32diAuhLGDZuGjJSJhSQ0PsNjlFQrD8GdLsiy4nLohiJMBCXUw8nys1RAJSlLlRaKcyi/l6FYm+hZiMO4pC5SGMHTdrJBYB/vj+kCrxIUSQkepp5t8w0cXNmxt/FnVxYZVtHhlFs2hJHmGJp5xAIj3vU6hXRwP+WUv6CLgpJDgnoQxH0I5j0EIWWLKPxMqSSkuCR0i5U62VS6pGZzc6s3w9Y8UjlHyQ1h1eoNeDWtxtBqQMsRLDSlkugE8aUY0YnnGhw2y5hUO8PeLynKg7xTo616AcA5qLapZRMshQooWHDrx6R0jszKKZap3dMuZYKNHzqUS5A3XU9eHKNkxTjQLhJQweWWgndAVNIqFqbw+VfbhC+dhe7xcubLXkSusyrUqhQGlQB1JtEttKCSe7W0xBClEG7/ABV0dgfLnCbbu0FKmS2OUhJLO7OqgBNmr6R6KsVI3P8A1qV+Ee//AOo9jlqp9TVXoY+g/wAaA5MitDl4vkSguIGoj3DqbX7+sVQAgyU3DEEJ4w87ESAMSoLS4MtYNKMVJ9ucJu9e8P8AsxjZkucVS0BboKSC4YEir+UenjuLo3lTNbjthy1AumYEpIJy2y5QDU2ACRUfWMh2uxsucuXKkg5ZYKd1zfRx4i4c9buDHT5ODQEpmrJIWgpUSLpNQSLcKNUiFOAwJCiyQpiRQpAoWo5c9QDE+OUVuT6Byyl1FX/BjtjdiDNShc1SpSSDmDDOalmdwkNlqQTelY12C2PgJByowhmqJDqmb7nQ/wAyjdA0McFs9poRMIUZq1TDlKkpA3llOQliCaV0eGU2QnPlYCpYqY+3CA/Ipvd/0Z5EpYklFK/2EJ2Rh5qQpeGkvUb0tBIoxDtwpGa7Qdh5Kh/IHdLIJCQ+RWhH9Nxb3jRYntBKl7qWLeQ8uMBzsaJ4OZ0qFUkPuHR+epHAiAj+SPy6RkcmPL8Vt+6OEbawkyVMXLmS8uUkMOt3+IQjmJLuKEWajflHZO1ex5eIGdIyzCHrQg1BSSLsQR5RyPFpUlRQfEFEEQyUoyVseoShr0b7s1jjMkJzl1pdKuIINH5kMXgba2CdfhNeAhb2UnrOY5nzF1brHMDx1Bc15NGxSQRWKcc1KKTHqDkjFDZxzWj6dLMsho26MChiwvGf2zhgkKUWASHPQQUoqMbAliYNhNopZWqmt9SdBCLHYjvFGrgByr2ZPAGw05l4HlKzBSlOE6JFXJ8ObRrkJieFSVqbLVcyWluIckjzOWOdn8qeRKLekOwePGLbrbGWxeyc/E5V5e7lKrnU1R/Sh8xfjY8Y3WzewWDQP5maYeKlEeySIfYKRkloSzMAGFhyghTAOSAOJoI57ky9LQrk9h9nlwJbvxUun9pdx5Qvn/6Z4YZj3s4B6AFG6PNDmNPhsVKSXMxFNAoQYnHy12qD5gxqbMdp6OMdoNhzMIUJUoTJZJCZgDUvlI+FQdRbgaWLAS0tVq6cucdj2tsqXiJa5SiyVCj3Sr4VDmD9RHKThFoUqXMDLQopUOY+nPWKMM/TCcVJWS2dMTLWFFIUQfiD+x+6+UdDwuMC5IWGOQGiWq72AsA7tGCmyEhFXBOunpxgnZk6elkS05g9gQPmRD3slnAebdwyZSE4hScyVy8i0tVRKq10ABv0jDTSTMUolwzA/wBNMvtHWMbsabiJaJS5eWWEOSVAMoqFgC5YB7atHLduyUS1qlSzmCFEA8WJqW6+0HjZLNCxSkufF6x7FcfQyxfFDBEQSoBYHMfOKZUwg5VRetDkdRXlD4vRP0Mzs4FmJ8/2jQdisMFheUKzZmNRSlH4awpwpUMooQwc8/qDFO0pZSCtDhwczGhA4wy9aFNt6s7jgTLMsSytKjZn1qQG+7RjNsTphYYcyxNBzGXMNSmtAQoMq3vGc7K4lcqX3qUuVEgOrKkAOHrclQqK0HOGBWFUVKQQ+6ELllvViOqW/PmTqMn7Ongg1HY3O0pq5cuYlBRiJbnKoZi4BBSWO8CCqoNQRFC+23eN3mHRm4hakn/2n0MDI2qqTcmZKcBQV/3Jb2f8Q4PDXEbJkTd8BLkO9Kg1ctd+MLjlSe0HkwRyKmG7FxMrEso5QofDdQagZf5AG1YZzMGhIOQAB3IHHjCbZ2DCGZLN5u1m5ROfjVoWcp+sBPK5PR7F40caqKSAdqrCVsbqc+f38ucct7cbMyL75AAStgQAfFx4OY6ptPDiegqQP5ibjinlzjDdo8Zlwi86SpYUE+EsFAghSjZLj1qOLDGbDnCNbMpsbH93PKbDMsA2qVPXjb3jcYKfm1jAfwxaWtI3goJI4tX1AHtGikYtrARf48m1VClKMX2bzBKA1jKf6iTkJMqUPiBWsC5SCyB/uU/+Me4faiwaRndvbSUvFqUpIOVISnrkJT/yU8M8ibWP+ShThNVYvmzFEhOgoEps9mSBzo9zzpDrCbNVJm4PP4lzkFQ0TvJDe8XdmcBUzFgEp3Ua1YZj5PlHQw67Sy8gw0wAUme4Wgj6xyXJ2UY4RXs2+In92gqylR+FIZ1HQB/noHMKMFMMxInzEha1rUlCFOUSwlnLalyBzq+ghwmu9yp5/f7wPsvBd48lJSlSF5g9N1TBTcahJ/3CPRinphWkrYywk3MAky0JzUASkAf42ijaexskpeICES5iXJSGaYkXChbMRY3Bh3NmSsMGd1tQn79hGV2vtFcxW8osaAWFeQifk8aqW2bjg8sriqj9ivaU1SpqJaVmWDfLmBAAfUAOacQIa4XYcmao5peZWXxqUsqLMKqesVdp8OlBk4tIZJISv+nMlgfp6Qy2NNAWA7ZgU+oLe7Rs5SUlukPqLw8o9mW27skSVkoCikfCSQWHAi8CbD2dMmzFTGCJYV4ylOV38Io6i3DzaOrytlSVJdSQotUnlw4Rz7bO3XIlICQElgBwB0HCLMTlVPZBKanpa+w/tjtpcnDzEyzv5UjOWcArSKC1jHH5gub8zqdeZjovbaY0hCmfOhIPIpUinoPaOfqmv8IimHQjjGtsGj6Ls/8ASPT9Y+hlv6F8YfZatIUOh94kg0ipEw14PFiFvD0QU6GmAnBm1EE4xGaWR5noIUS5pSXg3E4v+UTxYet/Z4JzSi2Ao3JUNMfikCRJlylutKRnKaCqaueObTSsMtibSkJlpSpZzfFnc72ta0hPsDYGJxaf5ctkC61HKl+D3JgnFdhccjwoQv8AtWPq0clyTOsnQ12ntaUZakpIUVJKQACw8zoLwPsztB3csIWkqKaJI/DoPKM1iNiYyWd+QvyD/IxA4WYA7EdXgaQXJ9mrPawhW7LI18X0aK1dqwS6pb8WV+kZJOHmKNK8a26wfhOz86aQlCS5bQ2OtIzij3Nmh2btWbiZ6UygUoRVWr6VMVdu5UrIQvFoQqYkJMvu1KWVIUC5KFFkiocj4je0ONi7O/h0Kl973cxaVMp05+qQQQSODGEmC2Cjvpmab3kqahecLRmmKmEbqklKGTViS4DUIMYqTNkm1Rj1yciUuwJKVuC4UCk5SDqCCf0Ii1JY/KJ7ckS0LmZFlfdqEtJozBZJtq6yPUaGKZSnT0+R/X5x0fGeiHIqYdIXWFu1JJzKmAVTnPmcqQfIAnyEFS1VixEtKpoSoOlQKlB2zZEk5X0CiEJPJRhnlK8d/TPYn8qHnZeSBJlZizgq4vmJVQa3/Nof7QwYm4aYkBlAhSCdFIIUC/kRTieb/YAzFZEKUVCWRVkpS1HQEihoQaAkBnumPMFtAqmTZUxQD5kp0AZw0chs6keh/soBUoKINAzWtAm08H3ikzJUxUqajwqAcdCNR9l4OKwCoJsov56xEwN10GvsGm4rEKlETe5UrVQSuobVPHzhXs9YWrfLhHiNAw6mg6kw5XLdxxhTtNcmWkpyhRocnwgioJHKNcuXY2DpNL2O1Y1KkGVkQqWqinW4CTckswAFX5QuRsibKUcq0qlIrmUplISK1eikgChcFoz0pM5Z7taFTJSy6gaOL3pR/KN9gcSmalUopIOXfB1SoH2EY4qSpgcnj6Ynx/bWXkXLwzqmEEZmKUgnxLJNmrGVViZOHVlyd7N+MqJCRxFKk+frCyQ0gby0qWKhCTm3rgrUKADg76avCxM0aOtRLlg5Jf2qYuxYuJLNx9DftPt9WJSmWJaZUtFWD1PEkmlgw5c4SjZasuZ9HrT9oZScKUqCpikACz1+dPnE8WEJRmUoq1Bf5C0VQxpEWTJ6QgVg6mq/8DH0Ub3E+sfR7QGy1Sal9YhOmso5LElnZ8r0dqPF0wUgLPUddYNiVLQbKmOIuQUlkrfJmGZq7oLlhxaIIQNCehekeqQXjWrVA3TtHddlLEuTKTulGUZFo8KkmoUOoL+cX7QUop3X404Ryjst2nXhiJcxzJJsfgc3HLXl7HrWDnAh3cMCDxGn3xBjlZYODpnSxzU1aEQmKGseqAPiQk+UF7QwuVeYeFVfPWPBChwsmYWVqgAcnA+cGf8AW5aJZ7sMRrVieDm/laBtroQUMpm4NrCVayWDlgGA0A6aR6zaHM6bJxAQlcvvpuiUg7uu8oMEp1rGL/1NmqwglIkKMvvEqExlOVeGiVKdQSHYkULgcY13ZyV/MWeOQHmyi7+ojn3+om0k4nHKyrGWSgIBpVdVKI0YUDn8NBUGCgti8jpGXkYZSZZJcKUUsH8KUkKc8zQNzEG4ShrY0PQ6+V/KIkA8aBq1JNySdSSTHztHUww4xtnPyT2XqUxY3FItkYjKoKDEh78wR8jFEwuyuIYv+JNDTmGPnHklLlnAvVRYUD/RupEOfyVMGMqdo6FJStc9E6WqX3S5SEyyrNutvTGIoCVeIeLdSKNCbbJyYqYmjEuD1D09faFvZjFCXNl94M0ibMShQPwqVQKTye9x7xt+1Oxc5zpYKSKFgGYsBugbtfJ44+SPGVHUx5LiZ/DbamopmJA4gH5wzk9pvxJHk4/OM09K3BYjgYi8LoepGnxXaEqZMsM+p5wxwuzAggllLN1rBLdE/nGDmOaCGEnb+IlgAnOBxDn1v6wNB8zcSsOa7yMhqrMDnpQMxIuTBmOmGXJXMSWCUFQ6AbwJ1o99RGAV2tmWyt0S35w6m7YmTcDMcMMipZ4qVMZIPkFV84OKbaQvJKk2c+mLLN9mke4aaR4acTx/SLcegBkhnF/OBZDuY6vHZz3ktBS2WsGYSw0FST52j7EzApgAyEhgIqVESYOhEpFJ8vWPY87xMfRlGWWx53SWqBWIySTSLOUEILcgFBUMLPwtXUO0XSrRQhQat/v1iaVNBHmXTEOCOI99I6zMQpCZSZZISosOThNOlD7xyiSuuY+FNVcfEkfU+bR1eVigUS9WUlQPGqvmFD0iLy+0WeIqTYbtmcoBMsaip+XSMzN2vMlkggGrNV3jS7UTmyKBofp+8Z7amEDpUBV+Z0iFl0egAzVrqs14cItlJYFSqACITFol701YT/TUqP8AsSCYX4/tUQMsmUATZUypoSHEtJZt01KuFIZHBOfSCbUVbD5/aD+GkLPdkzZqV92klqBPi1OVPFqkgDiOTScIzFSsyjVgXAFKk6k0pyeNSpc2aozFqVMmFgpSrsBYAABKRVgA1TxhRi8EZUwpIZJs1gfw/l6dbYeLwSb/ALIcuRyeiANIhNNomtNIHWvSKWSUX4dTpUn/AHDqm/8Axf0Ee4ZAUoBRZNSo8EgOfl7xRImZTm+IEEcKXcenvBE+WAibl1Skp/sUtJPtQ9DATb46DgrkA7R2oqZupGSWkbqRdtCTx5fOO74l1y8yrmW56lIPzMcFm4UpQCxJUUBq1JSot7pju89PdS+7PAIH+1IH/wBY5+ZKkXYuzMbU2H3m/LLL9lcj+cZfE4WdKO/LWObOPUUjpElGsXFCSLMePEcDE/Iqo5dLxYeJDEFamSnzMdJGz5S1ALlSlOdUB/UVi/H7FwkqWVpkpSQKZSpNdBQ3j1ox2tHL5uFUKvXgBDWZiinBoQqh7xSgLHKEs/8Ako/4nhGh7WykYSRKKSRNWqtX3Qh1MDzKR5xgcZijMLuSdXizx8PKpMj8jNVxPESytT8IKXhUkuSXP3aBMItldYNKovOfKewQYUuz04xGbKSHTUloMK4rUY9R7lYs/glcRH0MI+j1G2CSrxOYIrQposC3jxhFPERIKj1KYiRGni6VMKSCOWrXI9f2h3httzZRyBYAFkqRmSQPwkEKT0cjgBCPCodRzeDK46mgPQEvzb1ZJRnQktcfvFmHBHJBqav6CU3DaNOO1ZTLBMpShVmUnKDzJZSf8TC6dtifONVd2n8MuhbgVne805YERLOVQPJ+dvzf1iySmiaMNTyf3gV4GGDur/kY/Kk/dAqwkZiAwoX8RUr1uW4xQkJmVCgFvVwWIfifusE4reLN9/vAi5TdfsfWK3CNfodDyXXFqyM6cUkBH7/WLEbNmTsxLqTq4N70I16VtEUoL5yAeZNPIi55DhUiGMnvVhg4TZg9ndgHYeX5xJlgu/QunZmMZs2YhZR4qEpNN5qkD+ocNQCRC53jfL2WnJqSxL6ggUPr0tq8INobLClXCJhPiNELfVX4S/xAMdRdUSTg4v8AQUsLrkhCIsmTN3IXAKFB+WZKwPJlf5QTLwK3yqyJoS6yGYFswAdRS+oBEX93LKMwBKElhmABfI+ZbV3iCwdgKXdwbXR7Fik3ZdgcWlEyTNKApCFy1ro4DAWH4gN5v6RxjqePmhZQQXBTmHDr7xyaet5KVS00ZlDg2vL9RGl7JbWJySZhrkPdE0zIvl6hi3EdDEnk4kopx9dlsYqNI2soUiUe4E16CPVpYkRAPTJ4ZDrSOfyrEsW8+aEj/tSyCou+ZRZk9XpFJVlLmjVivBbTSiVwV3qqHml0k8gSPSNQMjM/6qznnyJf4ZalN/etj/8AGIxMqWVGnrG97Q4ZGOnTShWVUtEtMtSnbdMxS3A0ImDmGB5RlJuCmYdWWakJzOEqBzIVoQCQN7kQDqLR18KagrOV5EXybRFKAKsB0p7R8THilRWpcOJkiSlRRNmNHq18YHWtzHjaPf4gR9FOX7aPo9R6ycegxEKj5Ky7BLk0AZy5+sYakXBdInLw+dSQfCSx6anp87cWIw+AYZptB+B79W05ftBBReY9xlt4buKXAH3SKMeL3INLTrsDxCyvOTQEgAaAAatwFGgrYi1oGVScyDY6jgXi7Ys2UVBMxBUHu4Yf3AhmjaS9myC4H8thbgeOcOl+UOi1GSk2yrF40Xjbk++v0I1pIKg26z0uaP8ASIT5LpYUeut6CvvDTaksJBAIIIAHFjug+8JZiVK8SmANhFCfN6OZlkoy4plJSBq5Y8AOLua8dIA7wrJH/lihZ948BqRzcDlF6ZJnG+WUDXQrbR7tH2LmKKmQlmoDwHIfWPK37bLPH+WqPJKCpQCqmzaJH06Q5kApo9T9v9YEwctKEu5JPiJ4wYjEJTXl+8BODaKZQUHbC0I0f7+/nFGKwoU6SAdLfRnOlYinacsglqCxiMrEZ2qwJ0r99YnyR1bH48yfVCbE4GZKdSCQlVa3pZizjT1DixhPhFpS4UHBYV0rZVNbP5xrcbIqRwvW5PLg/wBuYUbT2cVOoIYklsoDXNMo0J+VIkjFO7G5YtK4ipKAhymo1HLjTXjzB4iKVSMjLQTld6UIIrTUMRfRoOwwulgCBUmoAFDTVyfel6XSghAICVqdQZ2bK1WapL+1xC5Q2JjtbNR2a7RUSJ5Lt/3AKEN8YHhP9TZaVyxrEzELZSS40IYgjqKRzeVkShU1FUpSSw46XNP3ME7M2QhWHViJzla1ZhVdlFkABBq4DuaVFtUT8NPadDY37N/ie7AK5kxCUAPvKCXausYXHbZS5MsZyXINQgdVajo8M9nbJlJlomd2nMoOAXLetusBY7ZxVMdQcctG5esMw+DG/k7AyT46ANm4paJgJdWZ62cF8xPB78rRp0rlzJSRORmClOyhRQ0qNGAo/sTGdxp7s5ZY7ycrdSkGz2B6nWwcw0xuOGHlpw6qqQhKd74soAd9Qb+cX5HHUf8AqIPtiPaGw1oIXISubJWMyWbNL/pVmLkcDe40qoVQkEEKBYgggg8waiOgYKbkkSs7pWUuQq6UH8QNGc35aAExKbs6RjkpzJyzUAglBYhiQpL1zJBBoRpRonetgSimc7XWIlo1GJ7HLr3U5KyLomDKr/JNPJh1jM43CTJSzLmy1S1jQ8OIIJChzBIoYxP0BxZS4j6ItH0FbBoJw2zpiw4DJ4m0OMHgAghCBvG6jf106BoeiUEgIApHjBAWugoQOR0PNqeogsc4xlVfwNlCkJNorSN0Vyi/E2HvC3ELZCRyrzzV9SA/+4x9iV55gQ5qc6rUAFPJvdo8xstRUhNHVUtZnAHtSK5Se/8ABUY7QRgZRSkH4lW840eEJyJGZhlFg4FNfWE2zgJkx7oRTqeUNUpoOLD2DfMCGxS40iaeVqTPZhcjqAeWUFQ90pgPEoJ3dCz86W94LWp1JFt1SiNd5QSk8gyFwGudvOKcByjMO5Pfsj3ySv8Af+ha2CUoQKC5+kVLw9HasX4NOY3o14JxCKECosHDE8KPe0PeRQfFHV8VOPybFiJdInLlgkPbh98InLYfv1g6TLDfbwGbK4o6bcckf2JNopSFjcyy0jwji3nV4Iwq+7CVKS6lNlTyNul3hnO2JNS02YlJQrwlwegI0/TpFchaCrNoinPN+9vOI5ZU+huDDBpSQSvCkgFRq28wLE8n4P8AqYoVLBGUJe3iHmoAChFBpoTpBcuYojMASBe7CtHPl7HjWSUpmOSDlGUGoqSRl6HVuR6COVplGWUXHTM1jdmZ3VmAVpx4NTQfQ9IpwU1J/lzUhxbgrn1jW4nDJyvUHn0fW9PJhCXG4ILSHuKg6safX5w2NTZFCT9PYu2rs4d2kS/CVgzCDvBOvW8ajDYmUaiXNKQAlIEtamYZWBAbX2aE2yJefMguFo8T6g2PQtbiIcokEAgKLVDOWrytw9IJwrQ5N1rRGZilIcJllOUEhCw26CAojeVlagYtfhYTGd7MBQMqRYkB2rbQehMEGQZkxLqYqSkJzHczKUynoaZlS9D0vE5GIzS7USpWjEpCmDjoPlArIoNqtkM+V9izC7OMlRUhGdZHjWxLa5RpepirGJxRAM2WmakF2UMwDEW+JLOLEPzEW4jGZSpiU1oQedukUq2vOB3VpUx8z5/Yhbcm7oXJi7FLKpgmJVMlTXACZilLRewWRmT/AGqCuoh1gNpS8KlKZqCgzHVu7yU1oQoHeDMKPYc4ie0CFDLNlBqhyLPdiKvz948GFlzEfyyFIJ8BLpCuKdQQ9xXnHruII62ZjhMmTclUNLIV/WcwoeO6AXawvEcfg0YkFCgk5FOlWoChUcqpVelRwEZmV3mD3UqKZSlFZerqokJKgK2SLDpF2G7Qfy5i1pCUeH+pw5d+Dt9hwMZ/Z5xBjgcPqGOo4HWPoqVskzCZgNF7wroqo+cfRRziZTNHMVUk3b6Qu2nO/lhID5lEMelW9q9YMUt8x0HzgLEyypSQAGCWDjVQ3j1qTE+GL5Jy9D2r0hBJQyZk1t6YrKm9E0rX2iraiyZuRAqwQPO/3pDfElIWEfCmgGnOJ7NwAzqmquTuvbnb0/KOhljUVJDX47UOYRs3CCXLCBXjzP2YKykNRh+nHWh0j1Id7cD1Jb71/uixCL2qfd3r9+prCoTbOTkxWwVb55iuASgH+1APzWr0hWtVYZ4dQMsqd8xUvWy1qWLDQZfLyhTixW+sV4oJqxTwfIOlT3NH+/v5QavEFIFRoxDt7in6Qnww3khjUgRo5csGjVfVw/Ec3d3gs8oxqzp+PhtbBJctRUnnqPOGKJJYa/oWH3yMfYSWMxcUGX0etPT0gnEOga1UQPTN+sSZMts6UYRiqoBRiSGRmLAK9hwOlRAk2ktviIoz1Klb3Tdq/KLpcoPndmQq/M+8VLmgqrcA+pF30oIVuTtegk441SDMBiJktPdglls4bQFh1gzDJo/IqoKOeVradLRTIQcySoHKkerJL20cfOLsLVJzAh1Fw9dKVpRm0hOR6tkuSaeo/wBlwLhmc30px6CnlCraacqgkHk5/Pma+QhipJSXF1F7mgHytz1hfttBTkJykFA1cVc+VMvpG4lcqFRnxdiOTiwmcJlktv8AKWSyurUUP7Y04ABLal6l7DR7DpSMjhykTglVQp0mmihr8of7KxJVLZXiQShVfwtlL8wUl+Jh8pe32OnNtWgkrA7tdWRNlrPNCZssrHonoWrBEtKV99QoaY4SbpTcBkkioIVrduMKtrJeWwoCRmZw4dj0v79Ya7FlSwVhApMShajTxKRX5e8SZGlK37Jm7QsnS06Dg56CnzgU4NImJWACUl61BIOo1BIPoYZ4pAGbiPepH0hYt6M5JD+35A+sFFsW9i7H4GYJii6FJUSQE2D1AHBNfYwryrScwdBGvByXb2jToWaAh/v9PlAmKwviLCo9tYOVvbDWN1oVp2mrLlWrMCC70FeWp5xWvESlpGdLBDAAM+UfCeIPM8n1iudhmNLWY9K38oCOHIKvu/37wqUUeob/APUV6W0Yrby3o+hBlPOPo9f6M4nQUS3SOaq6UH7mCmASVm9afKIyEMAPOnMfmPeIY3wZfuo/P7pFmaNPRfOEYO0IUSzMmMCzMSeBP1h6tAYAWDj8+T9ObjSA9iIDKW3iUWI1AoBwqX4HhaDlnSgemt+HEs7tc6EwrJlbfH6BeRuPH0RQ3L5MAXLG1w3Kj8IhiFFCCrgkkdQHYcKfpE1JBrroXfRq+wfmxijGn+W34soZ9CsBujP/AGtHsf8A6RHPHxdlRlFCQlLMAka6JAa1qQCnDvMANAT79IdKqMpPDo/MeX3aKRJS/EjXr+sWQy0g4wi6ZKXhEAy1aB34UP5U84iZUwzLlJdgAaqHwmoNSWY0f0g9MoqDhhukXI3i3O9oA2bLmKmuoqJSA5USbEboqXFi2jaEwGWa22+kMm6fxHARW1OfAnU/3CPpqwqpsMpPB8wCr8IkubcBLku/U3to4v0jwbwJPsbZg+vTTjHOcm1YP5ZdC5QL5Q2UOGsaFhrWkCrXkUDa3Sj0bybhDGZhi4JSQCXHmOD8WPQwHiUAJYh3tWzF/O8XYkqX7Fyy8k7Gatp96WUNA7CgSkE6cg0TLpYF3SP+VeP56wnwcvKFLoaNrb5cLw5lkEZVcLNcE8aU9oRnx09dBRUUlRFMwqJDVfh7CvnVojtcJYAPowvVwD5c20j7uwFgOKA242eLVKBQXd7vbjbXSAhcWpI9NK9GNQkLxKQB8XsKvDPZq8s+ak/HodVJFP8AiFP/AGjhFWAwWWao3LEa60oRVx9YHlTD35ILELSVVNipixuxSSIrlBuQ2KXA0ONw57tq1FOVN03ahDP0iewJ5Cygu/dsCW4EjUfCjTjF8itxen59a1HXzijFSTKXLmAbqVhKuiwFJPqlSeiusRZU32ILcdLO85skHnV7+Z+xZRiEGtLBI9fnp9mHmOmhgoAsuWg+bmnpCjHFlEkXXY8Epf8AX7eBgwarYMDl45UsKcbfUQTJmZt0J0qGsLVJ9PQQuVOIAapDuxVUqpUGmhtzgjAqKXrdJBB4ln9g4HFtYc+rHwyutg+PwYYila8mMJV4VYD6i3MQ72qkCWF5WVmUGHhSoEOxDAu+g+HmYA747viJOl+jNc1EDxUkIyS3oUZ18D6GPoZPzEexv4n9ivyD/Zi1d2y6KTTyah++EXY8U5gDieGnGke5ioOAygE/IFvnF86rn+779Ivn3bLObegXAIIlgW9KvcPYnkQLUoI9V6M/Ggq9LnpQ0pHkte7Q182UOmhYgP1iUxYDkPcueYoR/cnQ2IFY5Un8ma9FstQsxYPYOfDRhcjXmH1DQLilDvJSVfiBoX8CFKT1669YtlKswBAHBmIrR+YcPYvVjAiz/wCIQGcnNwqcqrVo4PkSYbi7v9MXN2MiHqzfO/0Z25cBCdlFaiDQeV+uj05Q1m8TqOHv7N78BHiEpBqKux8moPX7FIOM+OxkI+wnBMU8zWzlunC4OsMP4csm3BwbB2Jc6WPnAchQO6Xe3Vdw/AOl3EHyZwD5tCatq3W1vSJsk3J2FJoAPkGPCoUN7mBUHq7QSgEClXtlNGzEUJ1I5RUEh/Fwq1a2L31+7xShZTUUPip0HuSIxbESVnuJuaCgZqtTdd3u9fLSF0zEDKQbgnnbT74wyxU9IG8mpeo/vJ++kJ8VOAUQGqeHEPqI6GFWtk8tIuRicySAACSHalben1MHd0UrCVGovyZ9Qa+8KU3FWccHo7j3EGfxTqALAhNC1aOXJArrpDZx1o9jm3JIlNopQJuKPoCzffOJyVKOXVJ09eIrfTlFcw5i9C+YeY69YPw6gWGXm+oo/pC5JcStqXbK8Rhil8xA1caa6Hl0PlVGqpmUYBJLkVJvrpSkP9oupN2GVyOVHPVi3mYzykZQQCXKST529mgsLdMyV1o1KcMy6aquSKPQXpSnkeVfcfhitK0O2dJF7FJChVqXWDEMHjs4BIG8N0NVO7WuoGVubwZNxILpA8IcnlblUgn7tzskpewKM/hsTmk3coyvwG+c2lQCQAbHK8VzS7rZxmmPrcAa+RrEsPhkp7xFWqG4iqWNWuh/OFS8Xu83a5rRuFAwrxaNxqzXEuMkULUJT6JST51Ho8RRihLIVRxvWJYm1LOBAgmlTUqXYcaAXNhp6QNNWTR9Rz0JBc1sDDeNgsbYvaaVpGUhnNnoLBJBIZh1cXrACkpIFU6MTofT7HQQjK1ZnBv9/SCCtThIqdYyMqtC5JsYdwfwn1j6K+/VH0P5IXxP/9k="
                style="margin: auto"
              ></v-img>
              <v-card-title>{{ firstname }} {{ lastname }} </v-card-title>
              <v-card-subtitle>{{ nickname }} Culture </v-card-subtitle>
              <v-card-text>{{ telephone }} </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions>
                <!-- mettre le texte de description plus petit-->
                <v-btn color="#ca1501" text>Plus </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    La description du hard, s'il a des infos a communiquer aux
                    aux; peut etre ses dispos
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: 5,
      nickname: "Surnom",
      firstname: "Prénom",
      lastname: "Nom",
      telephone: "0X XX XX XX XX",
      show: false,
      items: ['hard1', 'hard2', 'hard3', 'hard4', 'hard5'],
      value: null,
    };
  },
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f0d0f;
  margin-top: 20px;
}
</style>
