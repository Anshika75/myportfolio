const badgeData = [
    {
      "badgeLink": "https://www.credly.com/badges/a432492a-8918-4c55-a390-bd32d242d73b/public_url",
      "badgeImageLink": "https://images.credly.com/images/2f7b0627-48a0-4894-8d46-3245bdfe0463/image.png",
      "badgeTitle": "AWS Academy Graduate - AWS Academy Cloud Architecting"
    },
    {
      "badgeLink": "https://www.credly.com/badges/9e042fea-48fb-4826-8dad-c1be81c1986e/public_url",
      "badgeImageLink": "https://images.credly.com/size/220x220/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png",
      "badgeTitle": "Cybersecurity Essentials"
    },
    {
      "badgeLink": "https://www.credly.com/badges/c2f4847f-0ff4-45df-acbe-f5e2fefc8abe/public_url",
      "badgeImageLink": "https://www.dropbox.com/scl/fi/fts4p2vgg69ypvc42fs0d/image.png?rlkey=rtdl1iatjkkkkajejkpnoqxsh&st=k19q53ew&dl=1",
      "badgeTitle": "Data Science Foundations"
    },
    {
      "badgeLink": "https://www.credly.com/badges/77d7f6cf-77c4-40d9-bc9d-8a295a27d6e1/public_url",
      "badgeImageLink": "https://www.dropbox.com/scl/fi/22r4rrxp8yvxszt4aprxn/image-1.png?rlkey=y7hx94sbyt9ofjpq0db1qxyf9&st=94hwuxkl&dl=1",
        "badgeTitle": "Databases and SQL for Data Science"
    },
    {
      "badgeLink": "https://www.credly.com/badges/12e76a1c-cf2e-4d86-b085-9668682310c3/public_url",
      "badgeImageLink": "https://images.credly.com/images/1b67aaf9-670d-4c92-8d51-7ac1190f0a42/image.png",
        "badgeTitle": "Software Engineering Essentials"
    },
    {
      "badgeLink": "https://developers.google.com/profile/badges/activity/android/install-android-studio",
      "badgeImageLink": "https://developers.google.com/static/profile/badges/activity/android/install-android-studio/badge.svg",
        "badgeTitle": "Android Studio User Badge"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/cla2g6tq01036609jnkubeooik",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDlmczZqdWgxNjI1ODA5bWkyNXAyNjRtbiIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbH19",
        "badgeTitle": "Surfer Moby Dock"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/clsw7mz4r93570fiek0wrafhs",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkOHVrb3MwMDk0MDlqbnVuaGRhcDd3IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
        "badgeTitle": "Hacktoberfest 2022: Level 4"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/cl9c7jexb450509k0fcclxk9z",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkOHRrZnAwMDMyMDlqbmtxZTF3dzVhIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
        "badgeTitle": "Hacktoberfest 2022: Level 3"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/clsw81hgv129210fiexg3kg87v",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkODlvaTAwMDE3MDlpZjdsdWxhNHV5IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
        "badgeTitle": "Hacktoberfest 2022: Level 2"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/cl9c7jwio457409k0valv7a0h",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhkNmZycXowMTgxMDltaGFleGpmczRwIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
        "badgeTitle": "Hacktoberfest 2022: Level 1"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/cl91cmu512066309jqegnx2lzg",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbDhlcTN6OWMwMzU3MDlsM2Z4OTluOHg2IiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
        "badgeTitle": "Hacktoberfest 2022: Registered"
    },
    {
      "badgeLink": "https://www.holopin.io/userbadge/clampo1s1153408mkdrjxg13w",
      "badgeImageLink": "https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbGFqeHF4eTUwNDMzMDhqc3k3bXp1NmlwIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=",
        "badgeTitle": "Appwrite Hacktoberfest 2022"
    },
    {
      "badgeLink": "https://www.cloudskillsboost.google/public_profiles/b42300dc-0e54-4781-8cfc-4ee5dd8442f0/badges/3142086",
      "badgeImageLink": "https://cdn.qwiklabs.com/chImyyo8QkjI9FvZjnuPb9a3BVlt2M12kJYilhiSBsk%3D",
        "badgeTitle": "New Year, New Skills: Red Challenge (A)"
    },
    {
      "badgeLink": "https://www.cloudskillsboost.google/public_profiles/b42300dc-0e54-4781-8cfc-4ee5dd8442f0/badges/3105263",
      "badgeImageLink": "https://cdn.qwiklabs.com/t1rieoUO9jW60M3eNwC4cWIxxbPmc9uhgEUUJLbySf8%3D",
        "badgeTitle": "New Year, New Skills: Green Challenge (A)"
    },
    {
      "badgeLink": "https://github.com/users/Anshika75/achievements/quickdraw",
      "badgeImageLink": "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
        "badgeTitle": "Quickdraw"
    },
    {
      "badgeLink": "https://github.com/users/Anshika75/achievements/pull-shark",  
      "badgeImageLink": "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
      "badgeTitle": "Pull Shark"
    }
  ]

    export default badgeData;