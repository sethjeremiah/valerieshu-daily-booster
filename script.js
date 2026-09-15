/* =========================================================
   viJEMIn Daily Booster
   SCRIPT
========================================================= */


/* =========================================================
   MESSAGE POOLS

   Dummy for now.
   Later:
   - 50 messages per jar
   - one message is selected per jar per day
========================================================= */

const messages = {
  /* =========================================================
     ❤️ COMFORT — WHEN LIFE SUCKS
     ========================================================= */

  comfort: [

      "Hey. Whatever happened today, you don't have to carry all of it at once. Breathe. You don't have to solve everything now. You already did your best, and I'm proud of you.",
      
      "You don't have to be okay every second. Some days are just hard, and that's okay. Let this one be hard. Let yourself rest. You don't have to pretend you're fine just because someone expects you to be.",
      
      "Come here. No fixing, no explaining, no pretending. You can just exist beside me for a while. You don't have to say anything. I'll keep you company, adek sayang.",
      
      "Whatever went wrong today, it doesn't make you a failure. One bad day is still just one day. Please don't let a painful moment control you. You are the one who can control how much power it has over you.",
      
      "Take a breath, sayang. The world can wait a little. You deserve a moment where nothing is expected from you. Put everything down for a while and just breathe. You already did your best.",
      
      "Kalau hari ini lagi gak baik-baik aja, biarin and let it be. Dunia emang kadang lakuin hal semaunya, jadi adek sayangku juga berhak lakuin apapun semaunya, gak harus ikutin apa maunya dunia jelek ini. Ayo kita hajar sama-sama, sayang?",
      
      "You don't have to figure everything out tonight. Some answers can wait until tomorrow. For now, let your tired mind be quiet. Not everything needs to be solved before you sleep.",
      
      "You're doing better than you think you are. I know it doesn't feel like it right now, but I see how much you've been carrying. So please be a little gentler with yourself. I'm always proud of you, wanita hebatku.",
      
      "You don't need to turn every difficult day into something productive. Sometimes being lazy and selfish for your own sanity is more than enough.",
      
      "Adek sayang, if today all the things feel so cruel to you, breathe in, breathe out. Throw it away, be angry about it. Release it to me, I'm all ears. Let someone care about you too, and let me be that someone, okay?",
      
      "Whatever you're feeling right now, you don't have to apologize for it. Feel it. Cry if you need to. Be quiet if you need to. I'll stay and wait for you.",
      
      "Bad days don't get to decide what your whole life looks like. Tomorrow is still waiting for you, and you don't have to know what it looks like yet. So live your life to the fullest, sayang.",
      
      "Hey, sayang. Consider this your tiny reminder that you are loved even on the days you don't feel particularly lovable. Especially on those days, you ARE more than enough.",
      
      "You are allowed to have messy days, tired days, angry days, quiet days, and days where you don't recognize yourself very much. You're still YOU through all of them.",
      
      "If today hurt, then let yourself admit that it hurt. You don't have to turn every wound into a lesson immediately. Sometimes it is enough to simply say, 'that really hurt.' And that's okay.",
      
      "Drink some water. Breathe slowly. Unclench your jaw. Yes, I'm bossing you around. It's because I care. And because apparently someone has to remind you to take care of yourself.",
      
      "You don't need to accomplish anything impressive to deserve kindness. You deserve it simply because you're you. Your worth was never supposed to depend on someone else. It depends on you knowing your worth and deciding whether someone else is worthy of your kindness or not.",
      
      "If everything feels too loud, make your world smaller for a moment. Just you, your breath, a quiet room, and this little reminder from me: sayang, everything's gonna be alright in the end. The rest can wait.",
      
      "Aku tau kamu bisa kendaliin semuanya. Tapi sayang, menjadi kuat bukan berarti kamu gak bisa ngandelin orang lain. Kamu boleh capek dan kuat di saat bersamaan, kamu boleh butuh bantuan kapanpun itu dan itu bukan suatu hal yang memalukan.",
      
      "You are not behind. You are not late. You're just moving through your own life at your own pace. Please don't punish yourself for not being somewhere you haven't reached yet.",
      
      "Whatever happened today, please don't let one moment convince you that everything is ruined. A bad chapter can still belong to a beautiful story.",
      
      "I'm proud of you for making it this far today. Even if nobody saw how hard it was, I hope you know that getting through something quietly still counts.",
      
      "Some days don't need productivity. Some days need food, water, sleep, a shower, and a little laziness. If today is one of those days, then that's enough.",
      
      "You don't have to make yourself smaller just because someone failed to appreciate you. Their inability to see your worth doesn't make your worth any smaller.",
      
      "Sayangku, a reminder: You survived every bad day you've had so far. This one doesn't need to be different. You don't have to conquer it today. Just let the day end.",
      
      "Please remember that being tired doesn't mean you're weak. It means you've been carrying things. So rest without feeling guilty about it, okay?",
      
      "Jangan dipaksa terus, ya. Kalau hari ini rasanya berat banget, istirahat dulu. Kamu nggak harus selalu kuat, dan kamu nggak harus selalu punya jawaban saat itu juga. Kamu cuman butuh istirahat dan lupain semuanya untuk sementara.",
      
      "Sometimes there is still so much good waiting for you beyond whatever is hurting right now. You don't have to see it yet. Just trust that this moment is not the whole story, it's just one part of your life.",
      
      "Don't make permanent conclusions about your life while you're having a terrible day. You're tired, you're hurting, and everything feels heavier right now. Give tomorrow a chance to feel different. It is waiting for you.",
      
      "Whatever you're blaming yourself for, take a breath before deciding you deserve all that blame. Maybe you made a mistake. Maybe things went wrong. That still doesn't mean you deserve to hate yourself for it.",
      
      "If today feels like too much, then let's make the goal smaller: Don't think about tomorrow, don't think about next week. Just get through this moment, then the next one. That's enough for now.",
      
      "Your feelings are real, but they are not always forecasts. What hurts today won't necessarily hurt forever. Let the feeling exist without letting it convince you that this is how everything will always be.",
      
      "God is close to the brokenhearted. Psalm 34:18. So if your heart feels a little broken today, remember that you are not sitting in that pain alone. He is there, go talk to Him.",
      
      "You are more than whatever went wrong today. Please don't let a bad moment become your whole identity. You are still the same precious person underneath all this exhaustion.",
      
      "Eat something. Rest a little. Drink some water. Then decide what actually needs your attention. Not everything deserves access to you all at once. You choose.",
      
      "If nobody told you today: you are doing enough. You are enough. You don't need to prove that by accomplishing one more thing before you let yourself rest.",
      
      "I wish I could give you one of those hugs that makes your shoulders finally drop. For now, consider this a tiny digital one. Close your eyes for a second and pretend I'm holding you while telling you that everything takes time, and that's okay.",
      
      "I'm rooting for you even when you're not particularly rooting for yourself. You don't need to be cheerful for me. You can show up exactly as you are. Happy, sad, quiet, irritated, exhausted. I don't need the polished version of you, I need you, in every version of yourself.",
      
      "Matthew 11:28 says, 'Come to me, all you who are weary.' So, rest for a little. You don't have to carry everything by yourself, especially when you're already tired.",
      
      "Sometimes the kindest thing you can do is stop fighting the fact that you're tired. Capek ya? Yaudah, istirahat dulu yuk, sayang. Dunia nggak akan runtuh cuma karena kamu berhenti sebentar.",
      
      "This hard or hurtful feeling is allowed to pass through you. You don't have to build a home inside it. Let it come, let it stay for a while, and eventually, let it go.",
      
      "Whatever today took from you, I hope in the end of the day it gives some of it back. A little peace. A little rest. A little softness. And maybe a reminder that you are more than enough, more than you realize.",
      
      "Come back to yourself, slowly. There's no rush. Tarik napas pelan-pelan. Kamu aman untuk berhenti sebentar. Kamu nggak harus figured it out everything hari ini.",
      
      "Psalm 23:4 — 'Even though I walk through the darkest valley, I will fear no evil, for you are with me.' You don't have to be afraid of this dark moment, sayang. God is still walking beside you.",
      
      "Isaiah 41:10 — 'Do not fear, for I am with you.' So when everything feels too heavy and you're scared of what comes next, remember that you don't have to face it alone. God is with you.",
      
      "Psalm 55:22 — 'Cast your cares on the Lord and he will sustain you.' You don't have to hold every worry in your hands tonight. Give some of it to Him and let yourself breathe.",
      
      "2 Corinthians 12:9 — 'My grace is sufficient for you, for my power is made perfect in weakness.' So it's okay to be weak sometimes. You don't have to hide every tired part of yourself.",
      
      "Lamentations 3:22–23 — 'His mercies never come to an end; they are new every morning.' Whatever today looked like, tomorrow gets to begin again. You don't have to carry today's weight into a new morning.",
      
      "Romans 8:38–39 reminds you that nothing can separate us from the love of God. Not your worst day, not your mistakes, not your sadness, not even the things you don't understand right now.",
      
      "Psalm 46:10 — 'Be still, and know that I am God.' So for a moment, stop trying to fix everything. Be still. Breathe. Let God handle the things that are too heavy for you tonight."

  ],


  /* =========================================================
     🧡 MOTIVATION — GET YOUR ASS UP
     ========================================================= */

  motivation: [
      
      "Hey, princess. You don't need to feel ready to start. Sometimes you just have to take the first step and let the confidence catch up later. Come on, I know you can. GET UP, GET UP!",
      
      "Come on, sayang. Stop overthinking it for five minutes and just start. You don't have to finish everything today. Just do the first thing: GET UP!",
      
      "Sayang, kalau kamu terus nunggu sampai semuanya sesuai mood kamu, kamu gak akan mulai-mulai. Gak harus sempurna kok, mulai aja dulu, nanti otomatis bakal kelar sendiri.",
      
      "One small step still counts. You don't have to make a huge move today. Just do one thing that gets you a little closer. That's already something.",
      
      "Princess, you don't need permission to believe in YOURself. You know what you're capable of. Now go prove it to yourself, not to anyone else. I'll be proud, always.",
      
      "Masih rebahan? Hmm, menarik. Ayo bangun dulu, adek cantik. Lima menit aja. Kalau masih males setelah itu, coba lagi lima menit. Kalau masih malas lagi, tunda aja lima menit sampai satu hari kelar.",
      
      "You don't have to be fearless to do something brave. You can be scared, uncertain, and still take the step anyway. Being scared doesn't mean you can't do it.",
      
      "Stop waiting for the perfect moment. It probably isn't coming. Make the moment you have right now count. Start messy, stay classy, because you are the princess.",
      
      "Adek sayang, kamu gak harus langsung jago. Gak harus langsung tahu semuanya. Coba dulu. Salah sedikit gak apa-apa, nanti bisa cari cara lain. Yang penting jangan berhenti sebelum mulai.",
      
      "Hey, look at you. You've already come this far. Don't let one difficult part convince you that you can't make it through the rest. You've got more in you than you think. Jiāyóu!",
      
      "You're allowed to take it slowly, but don't confuse slowly with stopping completely. Keep going, princess. One little step at a time. I'll be right here annoying you until you do.",
      
      "Kalau memang kamu pengen sesuatu, jangan keburu mundur cuma karena takut gagal. Gagal itu masih bisa dibenerin. Tapi kalau gak pernah nyoba, kamu gak akan pernah tahu kamu sebenarnya bisa sejauh apa. Kayak sekarang nih, sayangku udah jago dan hebat banget! Apalagi ke depannya?",
      
      "Whatever you're working on today, don't make it bigger in your head than it actually is. Start with the first thing. We'll worry about the rest later.",
      
      "Princess, I know you're capable of more than you give yourself credit for. So please stop being mean to yourself and give yourself a chance. You might surprise yourself.",
      
      "Udah, jangan kebanyakan mikir. Kadang kamu tuh bukan gak bisa, cuma kelamaan mikirin semua kemungkinan sampai akhirnya gak ngapa-ngapain. Ayo, satu dulu. Coba harus lakuin apa dulu? Gih pikirin. Udah? Oke, cepat lakuin satu dulu!",
      
      "Jangan nunggu mood bagus baru mulai. Mood itu kadang suka seenaknya sendiri. Kalau hari ini gak datang, ya coba jalan dulu tanpa dia. Nanti juga nyusul si mood-mood itu.",
      
      "Don't let fear make decisions for you. Fear can sit in the passenger seat, but it doesn't get to drive. You are the driver.",
      
      "Kamu boleh takut, boleh ragu, boleh deg-degan. Tapi jangan kasih rasa takut itu hak buat mutusin apa yang boleh dan gak boleh kamu lakuin ya, sayang. Kamu tetap yang pegang kendali.",
      
      "You're not incapable. You're probably just overwhelmed by how big everything looks right now. Break it into smaller pieces and start with one. That's all I'm asking.",
      
      "Adek sayang, kalau semuanya kelihatan berat, jangan dipikirin semuanya sekaligus, ya? Pilih, kerjain, dan selesaiin satu dulu. Baru pikirin yang berikutnya. Gampang kan, sayang? Iya lah. Kan sayangku hebat.",
      
      "You can do difficult things without doing them perfectly. Progress doesn't need to look pretty to be real. So stop waiting until you can do it perfectly and just do it.",
      
      "Maybe you don't need more motivation. Maybe you just need to stop negotiating with yourself and get started. Yes, I'm calling you out. Now get up.",
      
      "Kalau hari ini lagi males banget, yaudah. Malesnya boleh. Tapi jangan sampai rasa males itu nyolong satu hari penuh dari kamu. Bangun, mandi, minum air putih, terus mulai pelan-pelan.",
      
      "Five minutes. That's all I'm asking from you. Start for five minutes, and if you still hate it, you can complain to me about it. Deal?",
      
      "Kamu gak harus jadi orang paling hebat hari ini. Kamu cuma perlu jadi versi kamu yang sedikit lebih berani dari kemarin. Itu udah cukup.",
      
      "You're allowed to want something badly. You're allowed to work for it. And you're absolutely allowed to be proud of yourself when you get there. Don't be shy about celebrating yourself.",
      
      "Don't compare your beginning to someone else's middle. Your path is yours, princess. Keep your eyes on your own little race and stop looking sideways.",
      
      "Kalau kamu belum bisa lari, jalan aja. Kalau belum bisa jalan jauh, pelan-pelan aja. Aku gak peduli seberapa cepat kamu sampai, yang penting kamu tetap bergerak dan ngambil langkah untuk memulai.",
      
      "You've got more in you than you think. Don't waste all that potential worrying about whether you're good enough. Just give it a try. That's how you'll find out.",
      
      "Sayang, kamu boleh banget gagal. Serius. Gak akan ada drama cuma gara-gara satu kegagalan. Coba lagi, belajar sedikit, terus lanjut. Sesederhana itu.",
      
      "One bad attempt doesn't mean you can't do it. It just means you found one way that didn't work. Try again, differently this time.",
      
      "Princess, don't shrink yourself just because you're afraid of taking up space. You worked for this. Own it. You are allowed to be proud of how far you've come.",
      
      "Ayo, cantik. Jangan lihat semuanya sebagai satu gunung besar. Pecah jadi bukit-bukit kecil aja, coba naik satu dulu. Nanti pas sampai di atas, baru lihat mau ke bukit yang mana lagi.",
      
      "You're closer than you think. Keep going. Even if today's progress is tiny, tiny progress is still progress. Don't underestimate what small steps can do.",
      
      "You're allowed to have an off day, but don't let one lazy afternoon convince you that you've suddenly become incapable of doing anything. You're still you. You are always CAPABLE of DOING ANYTHING.",
      
      "Jangan takut sama sesuatu yang bahkan belum terjadi. Kamu belum tahu hasilnya bakal kayak apa. Jadi jangan hukum diri sendiri sekarang cuma karena kamu takut kemungkinan terburuknya.",
      
      "Hey, princess. You don't have to conquer the entire world today. That's a little dramatic, even for you. Just take care of the next thing in front of you.",
      
      "Kalau kamu lagi gak percaya sama diri sendiri, pinjam dulu kepercayaan dariku. Aku percaya kamu bisa. Nanti kalau kamu udah mulai percaya sama diri sendiri lagi, balikin ya. Deal?",
      
      "You can be nervous and still do it. You can doubt yourself and still try. You can be scared and still be brave. Those things can exist together, sayang.",
      
      "I know you're tired, but I also know that little spark in you is still there. Protect it. Feed it. And when you're ready, let it burn again. I'll be cheering for you.",
      
      "Jangan kebanyakan mikir sampai akhirnya kamu kalah sama pikiran sendiri. Kamu belum gagal. Kamu bahkan belum mulai. Jadi ayo, kasih dirimu kesempatan dulu.",
      
      "Don't wait until you feel motivated. Motivation comes and goes. Sometimes you just have to start anyway. The mood can catch up later.",
      
      "Sayang, kamu gak harus melakukan semuanya hari ini. Pilih yang paling penting, kerjain itu dulu. Sisanya bisa nunggu. Kamu bukan robot yang harus terus jalan tanpa berhenti.",
      
      "Still lying there? Interesting. I thought you had things to do. Come on, pretty girl. Sit up first. We'll negotiate the rest after you're out of bed.",
      
      "Okay, adek sayang. Enough staring at the task like it's going to magically disappear. It won't. Unfortunately, I checked. So let's get it over with together.",
      
      "Kalau kamu terus bilang 'nanti', hati-hati. Nanti bisa berubah jadi besok, besok jadi minggu depan, terus tiba-tiba udah lupa mau ngapain. Jadi, kerjain sekarang sedikit aja.",
      
      "Hey, pretty girl. I know sometimes you need a little push, so here it is: get up, fix yourself something to drink, put on your favorite song, and start. I'll consider this my contribution.",
      
      "你可以的，别怕！(You can do it, don't be afraid!)",
      
      "Sayang, kalau hari ini rasanya berat banget, gak usah mikirin semuanya. Cari satu hal kecil yang bisa kamu selesaikan sekarang. Setelah itu, baru lihat lagi. One thing at a time.",
      
      "你已经做得很好了，继续加油！(You're already doing great, keep going!)",
      
      "Come on, princess. You've got this. Not because everything will be easy, but because I know you. Now go make yourself proud. I'll be here when you come back."

  ],


  /* =========================================================
     🩷 MISS YOU — MISS ME, HUH?
     ========================================================= */

  missyou: [

  "Do you miss me, princess? I knew it. Come here, take your little dose of me. I hope this makes you smile, even just a little. Because no matter how busy I am, I will always miss you and keep you running through my mind.",

  "If you're opening this because you miss me, then congratulations. Your diagnosis is correct. You need a little bit of me. I miss you more, sayang.",

  "I know I'm not there right now, but pretend I'm there with you, stealing your attention and bothering you with my silly jokes like I always do. Miss me even more? Then same.",

  "Adek sayang, kalau kamu lagi kangen aku, sini. Aku juga soalnya kangen banget sama kamu. Apa aku rusakin aja semua kesibukan ini, ya? Mending nemplokin sayangku lagi.",

  "You know what? I miss you even more. So I guess we're both suffering from the same problem. Unfortunately, there's only one cure: we need to talk to each other soon. Wait for me, sayang.",

  "Princess, if you miss me today, just remember that somewhere in my little corner of the world, there's someone thinking about you too. Me, myself, and I.",

  "Kangen aku, ya? Jangan pura-pura. Kamu buka jar ini aja udah ketahuan. Sayang, aslinya aku juga kangen banget sama kamu. Tapi gimana, ya? Semoga pill kecil ini bisa obatin rindu kamu dikit, ya? Biar aku aja yang rindunya banyak-banyak.",

  "Sayangku, you don't always have to say you miss me. Sometimes I can tell, because I do the same. I miss you like 38479241957139237980/7, countless times over.",

  "Hey, princess. Consider this your tiny reminder that you are loved, missed, and thought about more often than you probably realize by me.",

  "Kalau aku lagi diculik kesibukan-kesibukan gila, buka aja jar ini. Anggap aku lagi nitipin sedikit kehadiran aku buat nemenin kamu sampai aku muncul sendiri nantinya. Bentar lagi aku muncul, pasti. Hap!",

  "Adek sayang, aku tahu kadang kamu cuma butuh aku ada. Jadi kalau hari ini rasanya sepi, baca-baca ulang dulu chat kita, ya? Tunggu sampai aku datang. Sayang tahu kan kalau aku kangennya gak pernah berhenti?",

  "Miss me a little less, okay? Or don't. Actually, keep missing me like I miss you every second.",

  "Princess, distance can be annoying, but it doesn't change the fact that you're still my favorite person to think about. I miss you.",

  "You opened this jar because you wanted a little piece of me. So here it is: I love you, I miss you, and yes, I'm still thinking about you.",

  "Adek sayang, kalau kamu lagi sendirian dan tiba-tiba pengen cerita sesuatu ke aku, ceritain aja dalam hati atau spam di room chat kita. Aku mungkin slow response, tapi aku tetap mau jadi tempat kamu pulang.",

  "If I could send you a hug through this jar, I would. For now, you'll have to imagine me wrapping my arms around you and saying, 'I miss you like I can't catch my breath anymore.'",

  "Sometimes missing someone is just your heart reminding you how much they mean to you. So if you miss me today, let yourself miss me. I'll be missing you too.",

  "Princess, this is your official reminder that no matter how busy the day gets, there is always a little part of it where I wish you were right here with me.",

  "Kalau kamu buka ini karena kangen aku, berarti misi jar ini berhasil. Sekarang senyum dulu, sayangku. Karena koko juga kangen sejadi-jadinya kangen sama adek sayang.",

  "Adek sayang, kadang aku berharap bisa habisin waktu sama kamu seharian, tapi emang kehidupan dewasa ini kadang nuntut waktu kita. Untuk itu, tunggu ya, sayang? Aku akan muncul sebentar lagi dan siap melepas rindu dengan sayangku lama-lama dan lama!",

  "If today feels a little lonelier because I'm not around, stay here for a moment. Take a breath. Imagine my hand in yours. I'm still right here in the ways I can be.",

  "Kangen aku itu nggak apa-apa. Malah boleh banget. Tapi setelah itu jangan lupa makan, minum, istirahat, dan senyum. Koko mau kamu baik-baik aja, adek sayang.",

  "You know I would make time for you if I were there, right? So until I can, let this little jar keep you company. One tiny dose of me at a time, just to tell you how much I want to spend the day with you.",

  "Miss me? Good. Because I miss you too. Now stop pretending you're not smiling at your screen. I love you.",

  "Princess, whenever you miss me, remember this: you don't have to chase me to find me. I'm already somewhere in your day, in your thoughts, in your heart, and of course, I will show up soon.",

  "Maybe I can't always be there when you want me, but that doesn't mean I won't want to be there. Sometimes timing gets in the way, but my love doesn't. I love you continuously.",

  "Kalau hari ini kamu cuma butuh satu hal dari aku, anggap pesan ini sebagai pelukan kecil. Nggak banyak, tapi cukup untuk bilang: aku sayang kamu dan akan selalu seperti itu.",

  "You don't have to wonder whether I miss you back. I do. Probably more than I tell you. So yes, princess, our feelings are always mutual.",

  "One day, I hope you won't need this jar because I'll be right there with you instead. Until then, keep a little piece of me here whenever you need it.",

  "If you opened this because you miss me, then here's your answer: I miss you more than you'll ever know, princess. Now come here and give me a virtual hug.",

  "Before you even opened this jar, I was probably already missing you. So technically, adek sayang, you didn't miss me first. I did.",

  "You think you're the one missing me right now? Cute. But let me remind you: I probably started missing you long before you even reached for this jar.",

  "Kalau kamu buka ini karena kangen aku, ketahuilah satu hal: sebelum kamu sempat merasa kangen, koko mungkin sudah lebih dulu kangen sama kamu. Jadi jangan merasa paling kangen, ya, princess.",

  "Sometimes I wonder if you know how often you cross my mind. You could be doing absolutely nothing, and somehow I'd still find a reason to miss you.",

  "Adek sayang, kamu mungkin baru sekarang bilang, 'aku kangen koko.' Tapi kalau boleh jujur, dari tadi aku juga udah kangen duluan. Kamu telat. Hehe.",

  "If you're reading this because you miss me, just know that I was already missing you before you opened the jar. So technically, I win this round.",

  "Sayangku, don't wait until you miss me to think of me. I don't need a reason to think about you. Sometimes you just appear in my head, and suddenly I miss you all over again.",

  "Aku tuh kayaknya nggak pernah punya jadwal khusus buat kangen kamu. Tiba-tiba aja bisa. Lagi kerja, lagi makan, lagi bengong, tahu-tahu, 'ih, kangen adek sayang.'",

  "Princess, if you ever wonder who misses who more, don't bother counting. You'll lose. I've been missing you since before you even realized you missed me.",

  "Kamu buka jar ini karena kangen aku? Iya, iya, aku tahu. Tapi perlu kamu tahu juga, sebelum kamu kangen, aku udah duluan. Jadi sekarang kita sama-sama kangen, cuma aku start-nya lebih cepat.",

  "I don't think you realize how easily you become the person I want to talk to. Even on the busiest days, there are little moments when I think, 'I wish she were here.' And then I miss you again.",

  "Adek sayang, kalau kamu tiba-tiba merasa kangen tanpa alasan, mungkin itu karena aku lagi kangen kamu juga. Anggap aja hati kita lagi saling manggil dari jauh.",

  "You opened this jar looking for me, but here's the funny part: I was already looking for you in my thoughts before you even got here.",

  "Kalau aku lagi sibuk, bukan berarti aku berhenti kangen. Kadang justru di sela-sela kesibukan itu aku kepikiran kamu. Terus yaudah, senyum sendiri sambil bilang, 'kangen banget sama sayangku.'",

  "I miss your little stories, your random messages, your presence, even the things you do that make me shake my head and smile. So yes, princess, I miss you first.",

  "Sayangku, jangan pernah merasa kamu sendirian dalam rasa kangen ini. Kalau kamu sedang mencari aku, aku mungkin sedang mencari kamu juga, hanya dari sisi yang berbeda.",

  "Maybe you opened this jar hoping to feel a little closer to me. But here's the truth: I made these because I already knew there would be days when I'd miss you before you even missed me.",

  "Adek sayang, nanti kalau kita ketemu, jangan protes kalau koko jadi susah lepas. Soalnya semua rasa kangen yang ditahan selama ini harus dibayar lunas. Sekalian bunganya.",

  "So, you miss me, huh? Good. Keep that feeling for a little while. Because when I finally get to see you, I'm going to make sure you know just how much I missed you first.",

  "Kalau hari ini kamu kangen aku, sini, ambil dosis kecil ini. Tapi ingat: rasa kangen kamu bukan yang pertama. Koko sudah lebih dulu kangen, jauh sebelum kamu membuka jar ini.",

  "And if you ever ask me who missed who first, I'll always have the same answer: me. Always me. Now come here, princess. I miss you."
  ],


  /* =========================================================
     💛 LOVE — LOOK HOW MUCH I LOVE YOU
     ========================================================= */

  love: [

```js
  "Just in case you forgot: Me, myself, and I are all completely, ridiculously, madly in love with you. Yes, all three of us (me) agree on this.",

  "I love you. Annoyingly much, actually. The kind of much that makes me think about you at random times and smile for absolutely no reason. Crazy, right? I like it.",

  "If loving you were a full-time job, I'd be dangerously overqualified. I'd probably still ask for overtime, though, because apparently I never get tired of loving you.",

  "You are one of my favorite things about this life. Thank you for existing in the same timeline as me. I will forever be grateful that, out of all the people in this world, I get to know and love you.",

  "I hope you know how deeply, genuinely, and stupidly I adore you. Sometimes I think, 'How did I get this lucky?' And then I just fall for you all over again.",

  "Sayangku, kalau kamu pernah bertanya-tanya seberapa besar aku sayang sama kamu, jawabannya mungkin sesederhana ini: lebih besar dari yang bisa aku jelaskan, lebih dalam dari yang bisa aku tunjukkan, dan lebih banyak dari yang bisa masuk ke satu pesan kecil seperti ini.",

  "You're not just someone I love. You're someone I love choosing, again and again. On the easy days, the difficult ones, and all the ordinary days in between, I still want it to be you.",

  "You make ordinary days feel a little more special just by existing in them. Somehow, knowing you're somewhere in my day makes even the most uneventful moments feel a little warmer.",

  "I love you in the quiet moments, the chaotic moments, and all the weird ones in between. I love every version of our days, because somehow you make all of them worth remembering.",

  "I hope you never doubt how wanted, appreciated, and loved you are. You deserve to feel those things not only when I say them, but in every little way I try to show you.",

  "You have a permanent little corner of my heart. Unfortunately, no eviction notice exists. So congratulations, princess. You're stuck there.",

  "I love your presence. Even when you're doing absolutely nothing. You don't have to entertain me, impress me, or do anything special. Having you there is already enough.",

  "There are probably a thousand ways to say I love you. I'll probably keep trying all of them, because somehow none of them ever feel quite enough to explain how much I mean it.",

  "You make me want to keep becoming someone worthy of loving you well. Not because you ask me to, but because loving you makes me want to become better, kinder, and more thoughtful every day.",

  "I love being able to call you mine. Not because I own you, but because I get to be the person who loves you, cares for you, and gets to share a little piece of this life with you.",

  "If I could give you one thing today, it would be the ability to see yourself through my eyes. Maybe then you'd finally understand why I look at you and think you're absolutely wonderful.",

  "You are, very inconveniently, one of the easiest people in the world for me to fall for. And somehow, every time I think I've reached the limit, you give me another reason to fall a little harder.",

  "You're my favorite notification, favorite distraction, and favorite person to think about. Somehow, even when I'm busy, my brain still finds a way to make room for you. Adek magic, I guess?",

  "I don't need a special occasion to love you loudly. I can love you on random Tuesdays, during boring afternoons, in the middle of busy days, and every ordinary moment in between.",

  "You make my heart do embarrassing things. Please take responsibility. I blame you for the random smiles, the sudden softness, and the way my mood somehow gets better just because I thought of you.",

  "I love the version of me that exists when I'm with you. Somehow, being around you makes me softer, happier, sillier, and more myself all at once.",

  "You're precious to me. More than I probably say out loud. So if I don't always find the perfect words, I hope you can still feel just how much you mean to me.",

  "I love you in ways that don't always need words. Sometimes it's in the way I remember little things about you, make time for you, worry about you, or simply want to know how your day went.",

  "I love knowing that somewhere in this huge world, there's you. Out of billions of people, there's one particular girl who somehow became someone incredibly important to my heart.",

  "I hope today reminds you that you have someone in your corner who loves you very, very much. Someone who will cheer for you, listen to you, annoy you, and stay ridiculously fond of you through it all.",

  "You're one of the best things that ever happened to my heart. I don't take that for granted, and I hope you know how grateful I am that somehow, our paths crossed.",

  "There is something incredibly comforting about knowing you're you and I'm me and somehow we found each other. In a world this huge, I still think that's one of the sweetest things that ever happened to me.",

  "I don't need everything to be perfect. Having you makes imperfect days easier to love. Even when life feels messy, knowing I have you makes things feel a little less heavy.",

  "You're loved on your good days, your bad days, your sleepy days, and your grumpy days. You don't have to be at your best to deserve my love. You just have to be you.",

  "I hope you never underestimate the space you occupy in my heart. You might not always see it from where you stand, but trust me, sayangku, you've taken up a very, very special place in there.",

  "Kalau kamu tanya apa yang paling aku suka dari kamu, mungkin aku nggak akan bisa jawab cuma satu. Ada terlalu banyak hal kecil tentang kamu yang aku suka, sampai akhirnya jawabannya cuma: kamu. Karena kamu itu kamu.",

  "Sayang, aku harap kamu tahu kalau kamu nggak perlu menjadi siapa-siapa selain dirimu sendiri untuk dicintai sebesar ini. Aku jatuh cinta sama kamu, bukan sama versi kamu yang sempurna.",

  "Aku suka bagaimana kehadiran adek bisa mengubah suasana tanpa adek sadari. Kadang cuma ngobrol sebentar sama kamu aja udah cukup bikin hariku terasa lebih baik.",

  "Kalau rasa sayangku bisa dihitung, mungkin dari awal aku udah nyerah ngitungnya. Sangat banyak. Lebih banyak dari yang bisa kamu bayangkan.",

  "Aku suka hal-hal kecil yang mungkin menurut adek biasa aja. Cara kamu cerita, cara kamu bereaksi, cara kamu tiba-tiba buat aku senyum senyum lebar. Entah kenapa, semuanya gampang banget bikin aku makin sayang.",

  "Sayangku, aku nggak butuh alasan besar buat mencintai kamu. Kadang cukup karena kamu muncul di chat, cukup karena aku dengar suara kamu, atau cukup karena tiba-tiba aku kepikiran kamu. Sesederhana itu.",

  "Aku mungkin suka menggoda kamu, bikin kamu kesel, atau sengaja cari gara-gara kecil. Tapi di balik semua itu, ada satu hal yang serius banget: aku sayang kamu. Yang ini nggak pernah bercanda.",

  "Kalau suatu hari kamu merasa nggak cukup baik, sini, biar aku yang ingetin. Di mataku, kamu tetap seseorang yang sangat berharga. Aku nggak mencintai kamu karena kamu selalu sempurna, aku mencintai kamu karena kamu adalah kamu.",

  "Aku suka punya seseorang yang bisa aku cari setelah hari yang panjang. Dan entah kenapa, orang itu selalu kamu. Rasanya kayak ada satu tempat yang selalu terasa lebih nyaman ketika aku bisa cerita sama kamu.",

  "Princess, kamu tahu nggak? Salah satu hal favoritku adalah melihat kamu jadi diri sendiri tanpa perlu mikirin pendapat orang lain. Ada sesuatu yang sangat cantik dari kamu saat kamu merasa nyaman menjadi dirimu sendiri.",

  "Aku sayang sama kamu bukan cuma saat kamu sedang manis. Aku juga sayang saat kamu bawel, keras kepala, ngambek, capek, atau lagi nggak tahu harus bagaimana. Semua versi kamu tetap punya tempat di hati aku.",

  "Kadang aku suka mikir, dari sekian banyak kemungkinan dalam hidup, kok bisa aku ketemu kamu? Dan makin kupikirin, makin aku sadar kalau aku nggak mau mengganti satu pun bagian dari cerita yang akhirnya membawa aku ke kamu.",

  "Ada banyak hal dalam hidup yang mungkin akan berubah seiring waktu. Tapi hari ini, dari sekian banyak hal yang bisa aku pikirkan, aku tetap paling suka punya kamu di dalamnya.",

  "Aku nggak janji setiap hari akan jadi hari yang sempurna. Tapi aku bisa janji kalau rasa sayangku nggak cuma muncul ketika semuanya sedang baik-baik saja. Aku mau tetap sayang di hari yang biasa, berat, bahkan berantakan sekalipun.",

  "Kalau aku boleh memilih satu hal untuk selalu aku bawa ke mana pun aku pergi, mungkin aku akan pilih rasa sayang ini. Karena di mana pun aku berada, rasanya selalu ada sedikit bagian dari aku yang membawa kamu di dalamnya.",

  "Kamu itu lucu. Bisa bikin aku kangen, bisa bikin aku senyum, bisa bikin aku kesel, dan entah bagaimana tetap jadi orang yang paling aku sayang di hari yang sama. Aku juga nggak tahu caranya kamu bisa begitu.",

  "Sayangku, jangan pernah berpikir kamu harus melakukan sesuatu yang luar biasa supaya aku tetap mencintai kamu. Kamu nggak perlu membuktikan apa-apa. Duduk di sampingku, cerita tentang harimu, atau bahkan diam bareng aku sudah lebih dari cukup.",

  "Ada banyak hal dalam hidup yang mungkin akan berubah seiring waktu. Tapi kalau ada satu hal yang ingin terus aku pilih, aku ingin tetap memilih kamu. Lagi, lagi, dan lagi.",

  "Jadi kalau suatu hari adek bertanya, 'Koko sayang adek sebanyak apa?' mungkin aku cuma bisa jawab: sebanyak aku bisa, sebanyak yang aku tahu, dan mungkin lebih banyak lagi dari itu. Karena sampai sekarang pun aku masih terus menemukan banyak alasan untuk mencintai kamu.",

 "And if you're wondering how much I love you today, the answer is still ridiculously much. As usual. Nothing new here, adek sayangku."

  ]

};

/* =========================================================
   DATE
========================================================= */

function getTodayKey() {

  const today = new Date();

  const year =
    today.getFullYear();

  const month =
    String(today.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(today.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;
}


/* =========================================================
   STORAGE KEY
========================================================= */

function getStorageKey(jarId) {

  return `vijemin-${getTodayKey()}-${jarId}`;

}


/* =========================================================
   TODAY'S MESSAGE
========================================================= */

function getTodayMessage(jarId) {

  const pool =
    messages[jarId];

  const today =
    getTodayKey();

  const dateNumber =
    Number(
      today.replaceAll("-", "")
    );

  const jarNumber =
    Object.keys(messages)
      .indexOf(jarId);

  const index =
    (
      dateNumber +
      jarNumber * 17
    ) % pool.length;

  return {

    text:
      pool[index],

    index:
      index

  };

}


/* =========================================================
   CHECK IF ALREADY TAKEN
========================================================= */

function hasTakenToday(jarId) {

  return (
    localStorage.getItem(
      getStorageKey(jarId)
    ) !== null
  );

}


/* =========================================================
   SAVE DOSE
========================================================= */

function saveDose(
  jarId,
  messageData
) {

  const doseData = {

    message:
      messageData.text,

    messageIndex:
      messageData.index,

    date:
      getTodayKey()

  };

  localStorage.setItem(
    getStorageKey(jarId),
    JSON.stringify(doseData)
  );

}


/* =========================================================
   GET SAVED DOSE
========================================================= */

function getSavedDose(jarId) {

  const saved =
    localStorage.getItem(
      getStorageKey(jarId)
    );

  if (!saved) {
    return null;
  }

  try {

    return JSON.parse(saved);

  } catch (error) {

    console.error(
      "Could not read saved dose:",
      error
    );

    return null;

  }

}


/* =========================================================
   ELEMENTS
========================================================= */

const modal =
  document.getElementById(
    "doseModal"
  );

const modalMessage =
  document.getElementById(
    "doseMessage"
  );

const doseTitle =
  document.getElementById(
    "doseTitle"
  );

const doseRepeat =
  document.getElementById(
    "doseRepeat"
  );

const closeModalButton =
  document.getElementById(
    "closeModal"
  );

const dailyMessage =
  document.getElementById(
    "dailyMessage"
  );

const jarButtons =
  document.querySelectorAll(
    ".jar-button"
  );


/* =========================================================
   OPEN MODAL
========================================================= */

function openModal(
  message,
  alreadyTaken = false
) {

  if (alreadyTaken) {

    doseTitle.textContent =
      "You Already Took One!";

    doseRepeat.textContent =
      "Here it is again ♡";

  } else {

    doseTitle.textContent =
      "Today's Dose";

    doseRepeat.textContent =
      "";

  }

  modalMessage.textContent =
    message;

  modal.classList.add(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

  modal.classList.remove(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


/* =========================================================
   UPDATE JAR UI
========================================================= */

function updateJarUI(jarId) {

  const button =
    document.querySelector(
      `.jar-button[data-jar="${jarId}"]`
    );

  const card =
    button?.closest(
      ".jar-card"
    );

  const status =
    document.querySelector(
      `.jar-status[data-status="${jarId}"]`
    );

  if (!card || !status) {
    return;
  }


  if (hasTakenToday(jarId)) {

    card.classList.add(
      "taken"
    );

    status.textContent =
      "You already took your dose today ♡";

  } else {

    card.classList.remove(
      "taken"
    );

    status.textContent =
      "";

  }

}


/* =========================================================
   UPDATE DAILY MESSAGE
========================================================= */

function updateDailyMessage() {

  const jarIds =
    Object.keys(messages);

  const takenCount =
    jarIds.filter(
      jarId =>
        hasTakenToday(jarId)
    ).length;


  if (takenCount === 0) {

    dailyMessage.textContent =
      "Your dose is waiting.";

  }

  else if (
    takenCount === jarIds.length
  ) {

    dailyMessage.textContent =
      "That's enough for today ♡";

  }

  else {

    dailyMessage.textContent =
      "Take what you need. There's still more waiting ♡";

  }

}


/* =========================================================
   TAKE DOSE
========================================================= */

function takeDose(
  jarId,
  button
) {

  /* -------------------------------------------------------
     ALREADY TAKEN

     Show the exact same dose.
     Never generate another one.
  ------------------------------------------------------- */

  if (hasTakenToday(jarId)) {

    const savedDose =
      getSavedDose(jarId);

    if (savedDose) {

      openModal(
        savedDose.message,
        true
      );

    }

    return;
  }


  /* -------------------------------------------------------
     FIRST TIME TODAY
  ------------------------------------------------------- */

  const card =
    button.closest(
      ".jar-card"
    );

  const messageData =
    getTodayMessage(
      jarId
    );


  /* -------------------------------------------------------
     START JAR ANIMATION
  ------------------------------------------------------- */

  card.classList.add(
    "opening"
  );


  /* -------------------------------------------------------
     WAIT FOR JAR ANIMATION
  ------------------------------------------------------- */

  setTimeout(() => {

    saveDose(
      jarId,
      messageData
    );

    updateJarUI(
      jarId
    );

    updateDailyMessage();

    openModal(
      messageData.text,
      false
    );

    card.classList.remove(
      "opening"
    );

  }, 850);

}


/* =========================================================
   JAR BUTTONS
========================================================= */

jarButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const jarId =
          button.dataset.jar;

        takeDose(
          jarId,
          button
        );

      }
    );

  }
);


/* =========================================================
   CLOSE BUTTON
========================================================= */

closeModalButton.addEventListener(
  "click",
  closeModal
);


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

modal.addEventListener(
  "click",
  event => {

    if (
      event.target.classList
        .contains("modal-overlay")
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializePage() {

  Object.keys(messages)
    .forEach(
      jarId => {

        updateJarUI(
          jarId
        );

      }
    );

  updateDailyMessage();

}


initializePage();
