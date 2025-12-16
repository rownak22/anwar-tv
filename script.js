function login(){
  const role=document.getElementById('role').value;
  const user=document.getElementById('username').value;
  const pass=document.getElementById('password').value;

  if(role==='admin' && user==='admin' && pass==='admin123'){
    document.getElementById('loginBox').style.display='none';
    document.getElementById('site').style.display='block';
    document.getElementById('adminPanel').style.display='block';
  }
  else if(role==='user' && user==='user' && pass==='1234'){
    document.getElementById('loginBox').style.display='none';
    document.getElementById('site').style.display='block';
  }
  else{
    alert('Invalid Login');
  }
}

function addNews(){
  const text=document.getElementById('newsInput').value;
  if(text==='')return;
  const div=document.createElement('div');
  div.className='card';
  div.innerText=text;
  document.getElementById('newsList').prepend(div);
  document.getElementById('newsInput').value='';
}
