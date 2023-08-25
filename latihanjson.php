<?php
$biodata=[ //bentuk array assosiative di php
    ["nama" => "kim hanbin",
    "email" => "hanbin@gmail.com"
    ],
    ["nama" => "namdosan",
    "email" => "dosann@gmail.com"
    ],
]
$data = json_encode($biodata);
echo $data;
?>