var audio = document.querySelector("#audio");
//declare vars
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var next = document.querySelector("#next");
var repeat = document.querySelector("#repeat");
var shuffle = document.querySelector("#shuffle");
var repeat = document.querySelector("#repeat");
var progress = document.querySelector("#progress");
var cur = document.querySelector("#current");
var dur = document.querySelector("#duration");
var title = document.querySelector("#title");
var artist = document.querySelector("#artist");
var album = document.querySelector(".album");
var body = document.body;
//click counter to track next and previous song
var counter = 0;

//stor song info in object
var songs = [
  {
    title: 'birds',
    artist: 'imagine dragons',
    album: 'https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png',
    src: 'https://cdnm.meln.top/mx/Imagine%20Dragons%20-%20Birds.mp3?hash=NDc0NDk5MTMxLzQ1NjQ2MDYxNC5tcDM=',
    bg: "var(--lg1)",
    h: "var(--h1)",
    p: "var(--p1)",
  },
  {
    title: 'melodrama',
    artist: 'lorde',
    album: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png',
    src: 'https://pl.meln.top/mr/153e0bde8681e409cc141fde6d494468.mp3?session_key=2f7a1e889cd39630811bc34fb576d593',
    bg: "var(--lg2)",
    h: "var(--h2)",
    p: "var(--p2)",
  },
  {
    title: 'counting stars',
    artist: 'one republic',
    album: 'https://i.pinimg.com/236x/ba/6b/b8/ba6bb8b8d3e8bcc77b25722c48b1d9d3--counting-stars-one-republic.jpg',
    src: 'https://pl.meln.top/mr/c811d94ad106960ff499f8ec06123fe5.mp3?session_key=fd450b602684fec867f3e900e6b6584f',
    bg: "var(--lg3)",
    h: "var(--h3)",
    p: "var(--p3)",
  },
  {
    title: 'the less i know the better',
    artist: 'tame impala',
    album: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png',
    src: 'https://pl.meln.top/mr/f6ab2ca2a12cc73411891b9ac7916357.mp3?session_key=5804fb631bb459413daa1c2fa4eb007f',
    bg: "var(--lg4)",
    h: "var(--h4)",
    p: "var(--p4)",
  },
  {
    title: 'Нирвана',
    artist: 'elman',
    album: 'https://i1.sndcdn.com/artworks-000576557270-ngqtmk-t500x500.jpg',
    src: 'https://pl.meln.top/mr/58453a762f0578b84bb0fccb4d7d0fd4.mp3?session_key=31212d2e5a83d81d3405d27149db6e94',
    bg: "var(--lg5)",
    h: "var(--h5)",
    p: "var(--p5)",
  },
  {
    title: 'into it',
    artist: 'chase atlantic',
    album: 'https://images.genius.com/87e00d314ce3cca3a6d8e2e26c538845.1000x1000x1.jpg',
    src: 'https://pl.meln.top/mr/e187dd4c3a41409e874737501d531a0d.mp3?session_key=69ade330c3af08d9b77ba32dfb6276fe',
    bg: "var(--lg6)",
    h: "var(--h6)",
    p: "var(--p6)",
  },
  {
    title: 'enjoy enjaami',
    artist: 'dhee x arivu',
    album: 'https://i1.wp.com/i.ytimg.com/vi/eYq7WapuDLU/hqdefault.jpg?ssl=1',
    src: 'https://dlserver.ru/?3uo-Wv6kd48ZhrGm98EPjcnJWUTM8LfpRvwMNvc9acYmmET9GamfRQa-nxErsLY2EKAGeDHpYscDC4e-k5Ww2CzNcpHrBsY0Pvv5Lwu_ltXScboGa03e9AES_B3YpCF6U2ot9NpkYT8I6qHYWrJPlCBJDk9guYthfkrBBu0JIMt4GunPQkM8Te99NqdF3zkew7ZNSQZp0QEzX2hKOlpI6RAzBAX8VH6EcMYy0PrVMiUz9S3qsnYa379dxwqk_SiZvVlQPJxLxVOhc0iDH7fBpoasho9or-fkBStsByZBZvbiJPgxa22lXyVkoi-D4nDssR5WHfDN5kvOcEw=.mp3',
    bg: "var(--lg7)",
    h: "var(--h7)",
    p: "var(--p7)",
  },
];

//onDOM loaded
(function(){
  title.innerHTML = songs[0].title;
  artist.innerHTML = songs[0].artist;
})();

//play, pause audio and toggle icon
play.addEventListener('click', function(){
  if(audio.paused)
    {
      play.setAttribute("name", "pause");
      audio.play();
      
    } else {
      play.setAttribute("name", "play");
      audio.pause();
    }
});

//progress time
audio.ontimeupdate = function()
{
  var percent = 250 * (this.currentTime / this.duration);
  progress.style.width = percent + "px";
  //convert sec to min+sec
  var durmin = Math.floor(this.duration % 3600 /60);
  var dursec = Math.floor(this.duration % 3600 % 60);
  var curmin = Math.floor(this.currentTime % 3600 / 60);
  var cursec = Math.floor(this.currentTime % 3600 % 60);
  
  //display 0 when this.duration isNaN
  isNaN(durmin && dursec) ? dur.innerHTML = 0 + ":" + 0 : dur.innerHTML = durmin + ":" + dursec;
    
  cur.innerHTML = curmin + ":" + cursec;
}

//play next song
next.onclick = function()
{
  if(counter < songs.length)
    {
      counter++;
      audio.setAttribute("src", songs[counter].src);
      album.setAttribute("style", "background-image: url(" + songs[counter].album + ")");
      artist.innerHTML = songs[counter].artist;
      title.innerHTML = songs[counter].title;
      body.style.background = songs[counter].bg;
      progress.style.background = songs[counter].h;
      title.style.color = songs[counter].h;
      artist.style.color = songs[counter].p;
      audio.play();
      play.setAttribute("name", "pause");
    } else {
      audio.setAttribute("src", songs[0].src);
      album.setAttribute("style", "background-image: url(" + songs[0].album + ")");
      artist.innerHTML = songs[0].artist;
      title.innerHTML = songs[0].title;
       body.style.background = songs[0].bg;
      progress.style.background = songs[0].h;
      title.style.color = songs[0].h;
      artist.style.color = songs[0].p;
      audio.play();
      play.setAttribute("name", "pause");
    }
}

//play previous song
back.onclick = function()
{
  if(counter == 0)
    {
      audio.setAttribute("src", songs[0].src);
      album.setAttribute("style", "background-image: url(" + songs[0].album + ")");
      artist.innerHTML = songs[0].artist;
      title.innerHTML = songs[0].title;
      body.style.background = songs[0].bg;
      title.style.color = songs[0].h;
      artist.style.color = songs[0].p;
      progress.style.background = songs[0].h;
      audio.play();
      play.setAttribute("name", "pause");
    } else {
      counter--;
      audio.setAttribute("src", songs[counter].src);
      album.setAttribute("style", "background-image: url(" + songs[counter].album + ")");
      artist.innerHTML = songs[counter].artist;
      title.innerHTML = songs[counter].title;
      body.style.background = songs[counter].bg;
      title.style.color = songs[counter].h;
      artist.style.color = songs[counter].p;
      progress.style.background = songs[counter].h;
      audio.play();
      play.setAttribute("name", "pause");
    }
}

//repeat same song
repeat.onclick = function()
{
  counter++;
  console.log(counter);
  //repeat song every 2nd time the icon is clicked
  if(counter%2 == 1){
    repeat.style.color = "#465557";
  audio.addEventListener('ended', function(){
   audio.play(); 
  });
  } else {
    repeat.style.color = "var(--icon1)";
    play.setAttribute("name", "pause");
    audio.addEventListener('ended', function(){
   audio.pause(); 
  });
  }
}

//shuffle songs
shuffle.onclick = function()
{
  shuffle.style.color = "#465557";
  counter++;
  console.log("clicked");
  var i =0;
  //shuffle songs every 2nd time the icon is clicked
  if(counter%2 == 1){
 audio.onended = function()
 {
   i++;
   if(i < songs.length)
     {
       audio.setAttribute("src", songs[i].src);
       album.setAttribute("style", "background-image: url(" + songs[i].album +")");
       title.innerHTML = songs[i].title;
       artist.innerHTML = songs[i].artist;
       body.style.background = songs[i].bg;
       progress.style.background = songs[i].h;
       title.style.color = songs[i].h;
      artist.style.color = songs[i].p;
     audio.play();
     } else {
       audio.setAttribute("src", songs[0].src);
       album.setAttribute("style", "background-image: url(" + songs[0].album +")");
       title.innerHTML = songs[0].title;
       artist.innerHTML = songs[0].artist;
        title.style.color = songs[0].h;
      artist.style.color = songs[0].p;
       body.style.background = songs[0].bg;
       progress.style.background = songs[0].h;
     }
 }
   } else {
   shuffle.style.color = "var(--icon1)";
   audio.onended = function()
   {
     audio.pause();
   }
 }
 }

