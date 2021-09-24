<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <script>
        i = 0;
        while(i< 10){
            document.write("hello world<br />");
            i = i + 1;
        }
    </script>
    <h2>php</h2>
    <ul>
    <?php
    $i = 0;
    while($i < 10){
        echo "<li>hello world</li>";
        $i = $i + 1;
    }
    ?>
    </ul>
</body>
</html>