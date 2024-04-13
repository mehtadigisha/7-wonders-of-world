<html>
    <head>
        <script type="text/javascript" language="javascript">
            function form(){
                u1=document.form1.d1.value
                u2=document.form1.d2.value
                val1=/^[A-z_]+$/;
                val2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(val1.test(u1) && val2.test(u2))
                {
                    alert("Log-in Successfully!!")
                }
                else
                {
                    alert("Their must be error"+"<br>"+"Try again")
                }
            }
        </script>
    </head>
</html>