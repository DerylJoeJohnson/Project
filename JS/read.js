function   marklist()
{ 
    
    var name=document.getElementById("name").value;
    document.getElementById("nam").innerHTML=name;
    var ec=document.getElementById("xc").value;
    document.getElementById("ec").innerHTML=ec;
    var semester=document.getElementById("sem").value;
    document.getElementById("seme").innerHTML=semester;
    var s=Array();
    for(var i=1;i<=6;i++)
    {
        s[i]=document.getElementById("sub"+i).value;
    }
    for(i=1;i<=6;i++)
    {  
        document.getElementById("su"+i).innerHTML=s[i]; 
    }    
    var m=Array();
    for(i=1;i<=6;i++)
    {
        m[i]=parseInt(document.getElementById("M"+i).value);
    }
    for(i=1;i<=6;i++)
    {  
        document.getElementById("mo"+i).innerHTML=m[i]; 
    }    
    var t=Array();
    for(i=1;i<=6;i++)
    {
        t[i]=parseInt(document.getElementById("T"+i).value);
    }
    for(i=1;i<=6;i++)
    {  
        document.getElementById("tm"+i).innerHTML=t[i]; 
    }
    
    

       var p=Array();
        var g=Array();
        for(i=1;i<=6;i++)
        {
             p[i]=(m[i]/t[i])*100;
        }         
        for(i=1;i<=6;i++)
        {
            if(p[i]>=95)
            g[i]='S';
            else if(p[i]>=90)
            g[i]='A+';
            else if(p[i]>=85)
            g[i]='A';
            else if(p[i]>=80)
            g[i]='B+';
            else if(p[i]>=75)
            g[i]='B';
            else if(p[i]>=70)
            g[i]='C+';
            else if(p[i]>=65)
            g[i]='C';
            else if(p[i]>=60)
            g[i]='D+';
            else if(p[i]>=55)
            g[i]='D';
            else if(p[i]>=50)
            g[i]='E';
            else if(p[i]<55)
            g[i]='F';

        }
        for(i=1;i<=6;i++)
        {
            document.getElementById("g"+i).innerHTML=g[i];
       
        }
        var status='Pass';
        //var
    for (i=1;i<=6;i++)
    {
        if(g[i]=='F')
        {
            status='Fail';
            break;
        }
        
    }
        
    document.getElementById("status1").innerHTML=status;
       

    }        
        
    
        
    
     