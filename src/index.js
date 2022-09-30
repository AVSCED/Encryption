function submit()
{
    let enc =[];
    let ap=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let a= document.getElementById("encrypt").value;
    let b=[];
    let c=ap.length;
    for (i=0;i<a.length;i++){
        b[i]=a.charAt(i);
        console.log(b[i]);
        for(j=0;j<c;j++)
        {
            if (b[i]== ap[j])
            {
                enc[i]=ap[j+1];
            }
        }
        
    }
document.getElementById("encrypted").innerHTML=enc;
    console.log(enc);
}