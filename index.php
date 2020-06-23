<?php

load([
  'auf\\plugin\\exampleclass' => 'classes/Exampleclass.php'
], __DIR__);

Kirby::plugin('auf/plugin', [
    'fields' => [
        'aufpluginfield' => [
          // here we could define the backend logic for our field if needed
        ]
    ]
]);