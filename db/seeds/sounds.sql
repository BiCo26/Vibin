

\c sound_waves;

INSERT INTO sounds (sound_wave, audio_url, description, image) VALUES
(  'Alpha Wave',
  'https://youtu.be/rEEHdaRo5mE',
  'study music for concentration with alpha waves binaural beats for brain power. 
  Relaxing music for studying, concentration and focus memory for work: soothing 
  music for reading with relaxing brain entrainment sounds. Use it as background 
  study music for final exam study time and studying music to help you concentrate 
  on homework, learning, working, reading or writing. Enjoy the music!',
  '../../public/images/trippy.gif'
  ),

  ('Beta Wave',
  'https://youtu.be/XtLz_qOknnk',
  'powerful Beta brain wave frequencies embedded in the program that keep your mind 
  in the range where you can best absorb and remember the knowledge you need to pass 
  your exams with flying colors.',
   '../../public/images/wave.gif'
  ), 

  ('Delta Wave',
  'https://youtu.be/JnhFsHyeeNQ',
  'Delta brainwaves are considered the most relaxing brainwave frequency range. Delta brainwaves
are commonly associated with the deepest sleep [stages 3 & 4] and a state of unconscious
awareness. Delta brainwaves are the lowest in brainwave frequency: ranging from 0 - 4 Hz, but
are the highest in amplitude. Delta brainwaves, like other slower brainwave patterns, are
generated in the right hemisphere, though they may be observed in widespread patterns
throughout various parts of the brain. The delta brainwave range is associated with empathy, the
unconscious mind, and a decreased sense of awareness.',
  '../../public/images/trippy.gif'
  
  ),
  ('Gamma Wave',
    'https://youtu.be/DHGPl4vJXU4',
    'Gamma Brain Waves have long been considered the brain’s information and sensory-binding brainwave
     – or the brainwave that is able to link and process information from all parts of the brain. 
      Having high amounts of Gamma Brainwave activity has been associated with:  having high levels of 
      intelligence, being compassionate, having high amounts of self-control, and feelings of natural 
      happiness. Gamma Brain Waves have also been linked to having a great memory and an increased perception
       of reality.',
    '../../public/images/wave.gif'
  ),
  
  ('Nerve Regeneration Wave',
  'https://youtu.be/VG2-4WupwfI',
  '111 hz is known to release beta endorphins and cause cell regeneration. The binaural 
  and isochronic frequency of 2.0 hz is directly related to nerve regeneration. 360 hz is 
  the -Balance Frequency- and brings sensations of Joy and Healing.',
  '../../public/images/wave.gif'
  ),
  ('Theta Wave',
  'https://youtu.be/NiMb8cenHpk',
  'DEEP THETA 5.5 Hz Binaural Beats & Miracle Tone 528 Hz (Solfeggio frequency) mixed smoothly 
  with Sounds of rain, thunder and calming winds. Wonderful to use for healing, detachment from 
  stress, overthinking, worries and negative energies that have accumulated over the day(s). Or 
  simply just for relaxation or background sounds. Activate your positive healing energy and raise 
  your vibration now.',
  '../../public/images/trippy.gif'
  ),

  ('WorkOut Wave',
  'https://youtu.be/aba2PliHxyc',
  'frequencies that range from 14Hz to 24Hz, this track was aimed to be your audio 
  accompaniment for work outs at the gym, jogging, exercising and the likes. It provides
   the effects of being awake and alert, focus, concentration on tasks, relief from fatigue, 
   boost of energy',
   '../../public/images/wave.gif'
  );


  -- id SERIAL PRIMARY KEY,
  -- user_id INTEGER REFERENCES users(id) null,
  -- sound_wave VARCHAR(200),
  -- audo_url TEXT, 
  -- description TEXT,
  -- image VARCHAR(200)