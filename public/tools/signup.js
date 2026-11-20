// Email signup for the free tools. Saves to the site's existing waitlist table
// (insert-only for the public), tagged so tool signups are easy to tell apart.
(function(){
  var URL='https://hwjfijlanyaxyopousfz.supabase.co/rest/v1/waitlist';
  var KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3amZpamxhbnlheHlvcG91c2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3OTU0MzcsImV4cCI6MjA3NzM3MTQzN30.oPeD6CwpteI56_1tKq6ZghYNFtMGhQF57lbDYAo1oM4';
  var f=document.getElementById('signup');if(!f)return;
  var msg=document.getElementById('signupMsg'),btn=f.querySelector('button');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var email=f.email.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){msg.textContent='Please enter a valid email.';return;}
    btn.disabled=true;msg.textContent='Saving...';
    fetch(URL,{method:'POST',headers:{'apikey':KEY,'Authorization':'Bearer '+KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({name:'Free tools signup ('+location.pathname+')',email:email})})
    .then(function(r){
      if(r.ok||r.status===409){f.reset();msg.textContent="You're in. Watch your inbox for next week's tool.";if(window.gtag)gtag('event','tools_signup',{event_category:'engagement',event_label:location.pathname});}
      else{msg.textContent='Something went wrong. Please try again.';}
    }).catch(function(){msg.textContent='Something went wrong. Please try again.';})
    .then(function(){btn.disabled=false;});
  });
})();
