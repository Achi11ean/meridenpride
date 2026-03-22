// src/eventTypes.jsx

export const EVENT_TYPES = [
  { value: "karaoke", label: "🎤 Karaoke" },
  { value: "open_mic", label: "🎶 Open Mic" },
  { value: "drag", label: "👠 Drag Show" },
  { value: "live_music", label: "🎸 Live Music" },
  { value: "trivia", label: "🧠 Trivia" },
  { value: "paint_sip", label: "🍷 Paint & Sip" },
{ value: "bingo", label: "🎱 Bingo" },

  { value: "theatre", label: "🎭 Theatre Production" },
  { value: "audition", label: "🎬 Auditions" },
  { value: "lgbtqia_plus", label: "🌈 LGBTQIA+" },
  { value: "pride", label: "🌈 Pride Festival" },

  { value: "poetry_slam", label: "📝 Poetry Slam" },
  { value: "comedy", label: "🤡 Comedy Show" },

  { value: "dancing", label: "💃 Dancing" },
  { value: "art", label: "🎨 Art" },
  { value: "fair", label: "🎪 Fair" },
  { value: "concert", label: "🎟️ Concert" },
{ value: "speed_dating", label: "💘 Speed Dating" },
{ value: "fundraiser", label: "💖 Fundraiser" },
  { value: "fireworks", label: "🎆 Fireworks" },
  { value: "halloween", label: "🎃 Halloween" },
  { value: "new_years_eve", label: "🎊 New Year’s Eve" },
  { value: "new_years_day", label: "🥂 New Year’s Day" },
  { value: "st_patricks_day", label: "☘️ St. Patrick’s Day" },
  { value: "thanksgiving", label: "🦃 Thanksgiving" },
  { value: "christmas", label: "🎄 Christmas" },

  { value: "other", label: "🌀 Other" },
];

// 🔁 Label lookup
export const EVENT_TYPE_LABEL_MAP = Object.fromEntries(
  EVENT_TYPES.map(t => [t.value, t.label])
);

// 🎨 Badge styles (used in cards, maps, calendars, etc.)
export const EVENT_TYPE_STYLES = {
  /* 🎤 PERFORMANCE CORE */
  karaoke:
    "bg-gradient-to-r from-pink-600 to-pink-400 border-pink-700 text-white",

  trivia:
    "bg-gradient-to-r from-yellow-300 to-yellow-100 border-yellow-500 text-yellow-900",

  drag:
    "bg-gradient-to-r from-fuchsia-700 to-pink-600 border-fuchsia-800 text-white",

  theatre:
    "bg-gradient-to-r from-red-700 to-red-500 border-red-800 text-white",

  open_mic:
    "bg-gradient-to-r from-green-600 to-green-400 border-green-700 text-white",
    
bingo:
  "bg-gradient-to-r from-teal-500 to-cyan-400 border-teal-700 text-white",

  live_music:
    "bg-gradient-to-r from-lime-400 to-lime-200 border-lime-600 text-lime-900",

  paint_sip:
    "bg-gradient-to-r from-purple-700 to-purple-400 border-purple-800 text-white",

  /* 🌈 COMMUNITY & IDENTITY */
  lgbtqia_plus:
    "bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-400 border-purple-800 text-white",
    pride:
  "bg-gradient-to-r from-pink-600 via-yellow-400 to-cyan-400 border-pink-700 text-white",

fundraiser:
  "bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 border-rose-700 text-white",
  audition:
    "bg-gradient-to-r from-indigo-600 to-blue-500 border-indigo-700 text-white",

  poetry_slam:
    "bg-gradient-to-r from-amber-300 to-amber-100 border-amber-500 text-amber-900",

  comedy:
    "bg-gradient-to-r from-rose-600 to-orange-500 border-rose-700 text-white",

  /* 🎶 MOVEMENT & ARTS */
  dancing:
    "bg-gradient-to-r from-pink-500 to-red-400 border-pink-700 text-white",

  art:
    "bg-gradient-to-r from-purple-500 to-indigo-400 border-purple-700 text-white",

  fair:
    "bg-gradient-to-r from-emerald-400 to-teal-300 border-emerald-600 text-emerald-900",

  concert:
    "bg-gradient-to-r from-blue-700 to-blue-500 border-blue-800 text-white",

  speed_dating:
    "bg-gradient-to-r from-rose-600 to-pink-500 border-rose-700 text-white",

  /* 🎆 HOLIDAYS & SPECIAL */
  fireworks:
    "bg-gradient-to-r from-blue-700 to-cyan-500 border-blue-800 text-white",

  halloween:
    "bg-gradient-to-r from-orange-700 to-orange-500 border-black text-white",

  new_years_eve:
    "bg-gradient-to-r from-yellow-400 to-amber-300 border-yellow-600 text-yellow-900",

  new_years_day:
    "bg-gradient-to-r from-amber-300 to-yellow-200 border-amber-500 text-amber-900",

  st_patricks_day:
    "bg-gradient-to-r from-green-700 to-green-500 border-green-800 text-white",

  thanksgiving:
    "bg-gradient-to-r from-orange-600 to-amber-500 border-orange-700 text-white",

  christmas:
    "bg-gradient-to-r from-green-800 to-red-700 border-green-900 text-white",

  /* 🧩 FALLBACK */
  other:
    "bg-gradient-to-r from-gray-300 to-gray-100 border-gray-400 text-gray-900",
};


// 📝 Human-friendly event descriptions
export const EVENT_TYPE_DESCRIPTION_MAP = {
  karaoke:
    "Sing your heart out with friends or solo — the stage is yours!",
  open_mic:
    "Showcase any talent: music, poetry, comedy, or more.",
  live_music:
    "Enjoy bands and musicians performing live sets.",
  drag:
    "Fabulous queens and kings serving glamour, talent, and sass!",
      pride:
    "Large-scale Pride celebrations featuring parades, festivals, live entertainment, vendors, and community resources.",
bingo:
  "Classic bingo nights with prizes, drinks, and lots of cheering!",

  trivia:
    "Test your knowledge in a fun team-based competition.",
  theatre:
    "Plays, musicals, and live stage performances.",
  audition:
    "Try out for upcoming productions, bands, or shows.",
  dancing:
    "Groove on stage or enjoy dazzling dancing performances.",
  art:
    "Exhibitions, galleries, and creative showcases.",
  fair:
    "Local fairs and festivals with food, fun, and entertainment.",
  concert:
    "Larger-scale live shows by bands and artists.",
  poetry_slam:
    "Spoken word, slam poetry, and lyrical performances.",
  comedy:
    "Stand-up, improv, and laughs all night long.",
  lgbtqia_plus:
    "Safe and inclusive events celebrating pride & diversity.",
  new_years_eve:
    "Ring in the new year with music, countdowns, and fun!",
  new_years_day:
    "Start the year with style, music, and fresh vibes.",
  st_patricks_day:
    "Celebrate with themed parties, music, and parades.",
  fireworks:
    "Sparkling shows for holidays and special celebrations.",
  halloween:
    "Costume parties, spooky fun, and themed performances.",
  thanksgiving:
    "Gather for themed parties, dinners, and celebrations.",
  christmas:
    "Festive events full of joy, music, and holiday cheer.",
  speed_dating:
    "Fun social meetups to form romantic connections.",
  paint_sip:
    "Sip wine while creating art with guided instruction.",
  other:
    "Unique events that don’t fit a single category.",
};



// 📸 Event type → Images
export const EVENT_TYPE_IMAGE_MAP = {
   karaoke: [
    "https://www.shutterstock.com/shutterstock/videos/3786634929/thumb/1.jpg?ip=x480",
    "https://media.istockphoto.com/id/1362893836/photo/best-friends-singing-into-a-microphone-on-karaoke-night.jpg?s=612x612&w=0&k=20&c=KPFkclnzSEt0y14ma82CI7_EhEkRPHTPIVnLJuRLOOI=",
    "https://www.shutterstock.com/shutterstock/videos/3756631879/thumb/1.jpg?ip=x480",
        "https://media.istockphoto.com/id/1045879590/photo/sing-men-dance-club-white-shirt-young-people.jpg?s=612x612&w=0&k=20&c=iM0pfrgmUqZbiOWlJnCC_7NkG9Yxk_LkV14AZFPauig=",
        "https://www.popsci.com/wp-content/uploads/2023/08/22/turn-laptop-into-karaoke-machine.jpg?quality=85&w=2000",
        "https://static.vecteezy.com/system/resources/previews/028/215/543/large_2x/music-karaoke-party-vivid-background-free-photo.jpg",
        "https://static.vecteezy.com/system/resources/previews/029/561/970/non_2x/music-karaoke-party-vivid-background-free-photo.jpg"
    
  ],
  bingo: [
  "https://media.istockphoto.com/id/1307432016/photo/people-playing-bingo-at-community-center.jpg?s=612x612&w=0&k=20&c=9x6Z4PzZK9q2mC8zVZpKZkZ9zQy5pR1YqKpF3ZpZk2Y=",
  "https://media.istockphoto.com/id/1173564024/photo/senior-women-playing-bingo.jpg?s=612x612&w=0&k=20&c=2zKpFZ0F8ZkKpR1YqZ9pQy5ZVZpZK9q2mC8zZ4PzZk2Y=",
  "https://media.istockphoto.com/id/1221041043/photo/group-of-friends-playing-bingo-at-party.jpg?s=612x612&w=0&k=20&c=KpZ9q2mC8zZ4PzZK9q2mC8zVZpZkZ9zQy5pR1YqFZ0F8Zk="
],

  trivia: [
    "https://media.gettyimages.com/id/1488505160/video/retro-television-gameshow-broadcast.jpg?s=640x640&k=20&c=bDEurbWFYi9G4tBthwZe-M6rtyyw6iTmxCG_rjUmg6Q=",
    "https://media.istockphoto.com/id/1280011167/vector/happy-participants-playing-quiz-game.jpg?s=612x612&w=0&k=20&c=IoS7QaJUEoQFRuAb8mCi7Aze_PDLAKEOhe9OWUza-KA=",
    "https://media.istockphoto.com/id/1085925126/vector/game-quiz-show-clever-young-people-playing-television-quiz-with-showman-trivia-game-tv.jpg?s=612x612&w=0&k=20&c=6XLQuqRYe1vhI7vA9jL-G4BAsKnOHkmSbT3wyhSPTHY="
  ],
  drag: [
    "https://wallpapercat.com/w/full/0/2/5/975092-3840x2160-desktop-4k-rupauls-drag-race-background.jpg",
    "https://wallpapers.com/images/featured/rupauls-drag-race-zltqw1efgin2s63o.jpg",
  ],
  open_mic: [
    "https://media.istockphoto.com/id/1197537243/photo/female-singer-performing-on-the-stage.jpg?s=612x612&w=0&k=20&c=Iv1R7ah5I7aMizqUIaslL7P2mUbNzuOcQRH2fnF324I=",
    "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/O/OpenMic_01-.Z3VXFxkoqaNTVwNPD77IHCpD7qLDSUW.jpg",
    "https://flypaper.soundfly.com/wp-content/uploads/2018/11/open-mic-II.jpg",
    "https://vocalist.org.uk/wp-content/uploads/2020/09/open-mic-nights.jpg",
    "https://img1.wsimg.com/isteam/ip/bf8bdfdc-ebc0-4936-b136-e9d7c50b01b3/PIC10.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
  ],
  audition: [
    "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/5535/article_full%403x.jpg",
    "https://images.squarespace-cdn.com/content/v1/551eb398e4b0b101cf722ed8/1536527472392-9Z9NDSZGN2D1DICMMZ3W/img.jpg",
  ],
  theatre: [
    "https://www.thehobbycenter.org/wp-content/uploads/2022/12/WickedLargeFeaturedNewsImage1200x650-scaled.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Palais_Garnier._December_5%2C_2010.jpg/500px-Palais_Garnier._December_5%2C_2010.jpg",
  ],
  comedy: [
    "https://www.shutterstock.com/image-vector/comedy-show-sign-on-dark-600nw-2480894647.jpg",
    "https://www.shutterstock.com/shutterstock/photos/354475085/display_1500/stock-vector-comic-bubble-head-laughter-ha-ha-ha-pop-art-retro-style-humor-and-comedy-the-illustration-in-the-354475085.jpg",
  ],
  poetry_slam: [
    "https://wkutalisman.com/wp-content/uploads/2023/02/socials.jpg",
    "https://images.squarespace-cdn.com/content/v1/586d0376ff7c50bb14fe3147/1553107290971-F1QCJOUP3NGA4VA74NLX/Poetry+Slam+%7CLakeOconeeLife.com",
  ],
  lgbtqia_plus: [
    "https://live-production.wcms.abc-cdn.net.au/36c462ccd86c9aa040bd42a581d6eeb7?impolicy=wcms_crop_resize&cropH=1079&cropW=1919&xPos=0&yPos=0&width=862&height=485",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptgaro2jmVggXgyI03lFiHkG-OtaWUkNMdw&s",
    "https://thumbs.dreamstime.com/b/rainbow-colored-hand-fist-raised-up-gay-pride-lgbt-conc-rainbow-colored-hand-fist-raised-up-gay-pride-lgbt-concept-125615179.jpg"
  ],
  live_music: [
    "https://media.istockphoto.com/id/502088147/photo/nothing-beats-live-music.jpg?s=612x612&w=0&k=20&c=N0RrfR0z1P1Q0DUCJIcEBFV8yxT6xF-wQilMv00O7kA=",
    "https://lumiere-a.akamaihd.net/v1/images/pp_lemonademouth_herobanner_mobile_19870_d23e5a3d.jpeg?region=0,0,640,480",
  ],
  fireworks: [
    "https://cdn.britannica.com/82/203482-050-E2ABDA79/People-fireworks.jpg",
    "https://news.northeastern.edu/wp-content/uploads/2017/07/Fireworks_1400.jpg?w=1024",
  ],
  halloween: [
    "https://media.istockphoto.com/id/603271570/photo/couple-dancing-at-the-party.jpg?s=612x612&w=0&k=20&c=3UiceEfj73QYNBgu6s7OP0FNtFJ9oyrtWtDDYQ-PDCc=",
    "https://media.istockphoto.com/id/486409670/photo/part-of-interior.jpg?s=612x612&w=0&k=20&c=-cdBa83jdU15rb4r9N6HqlsJmOPnaGfe9-KW08I5wM0=",
  ],
  other: [
    "https://media.istockphoto.com/id/1056890104/photo/young-man-holding-young-girl-on-his-back.jpg?s=612x612&w=0&k=20&c=75sl7K1ZllDNqrxqFjqbqr0w0bj-lMLAxgmYQZZkBt4=",
    "https://www.shutterstock.com/shutterstock/videos/3692263141/thumb/10.jpg?ip=x480",
  ],
  paint_sip: [
  "https://www.europavillage.com/wp-content/uploads/2024/08/AdobeStock_801053644_web.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJl9eBhbD0pefZaX-7p1jd4hQhCl-3ZcR5w&s",
  "https://assets.mainlinetoday.com/2024/02/wine-and-painting-AdobeStock_351266380-1068x712.jpg",
],
speed_dating: [
  "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/gsoqbkrc7o7ypoipmgwy.jpg", 
  "https://res.cloudinary.com/jerrick/image/upload/v1620921242/609d4b97218235001cf4d7a6.jpg",
  "https://cdn2.stylecraze.com/wp-content/uploads/2022/09/A-young-couple-in-love-walking-in-park-in-autumn-time-.jpg.webp"
],
pride: [
  "https://i.natgeofe.com/n/8e402067-e0bf-4421-8e06-41a964e1e055/2JG1MPC.jpg",
  "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5000x3333+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F86%2F8d%2Fccfdec7c40d8bc10edc5a68a4285%2Fgettyimages-1241554435.jpg",
  "https://media.cnn.com/api/v1/images/stellar/prod/170626132817-pride-parade.jpg?q=w_4625,h_2862,x_0,y_0,c_fill",
],
fundraiser: [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXptYmFvdWhwam01eXhpZHg3MGR5b3o3eWszNDJlZG56aDh2NmcxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f7jpBp3CvXdq3z2G2H/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnpnOTFveDZhZTBmeTc0dzZpcWp0N3NsN2dwOWJhc251aXcxY2xwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aUQScPkg6B0rZGuRLX/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJkZWdsZnpydTZkdThiZnZ2cHpkb2l0MThsYXV5MXU3Y21icng3MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ILdR27kxgbknhAiYzO/giphy.webp",
],


};


// 🧠 Helpers (shared logic)
export const normalizeEventType = (s = "") =>
  s.toString().trim().toLowerCase().replace(/\s+/g, "_");

export const parseEventTypes = (val) =>
  Array.isArray(val)
    ? val.map(normalizeEventType)
    : (val || "")
        .split(",")
        .map(normalizeEventType)
        .filter(Boolean);
