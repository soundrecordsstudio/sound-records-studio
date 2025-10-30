// Menu mobile (facultatif si tu ajoutes un burger plus tard)
// Changement de source audio par <select>
document.querySelectorAll('[data-audio-select]').forEach(box=>{
  const sel = box.querySelector('select');
  const audio = box.querySelector('audio');
  if(sel && audio){
    sel.addEventListener('change', ()=>{
      const src = sel.value;
      const s = audio.querySelector('source');
      s.src = src;
      audio.load(); audio.play().catch(()=>{ /* autoplay bloqué: ok */ });
    });
  }
});
