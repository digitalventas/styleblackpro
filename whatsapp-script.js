<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
<style>
  .hide {
    display: none!important;
  }
  typebot-standard {
    position: relative;
    z-index: 9999;
  }
  #__next {
    position: relative;
    z-index: 9999;
}
.user-bar {
  width: 100%;
  height: 55px;
  background: #005e54;
  color: #fff;
  padding: 0;
  font-size: 24px;
  position: fixed;
  z-index: 99999;
  display: block;
  top: 0;
}
.user-bar:after {
  content: "";
  display: table;
  clear: both;
}
.user-bar div {
    float: left;
    transform: translateY(-50%);
    position: relative;
    top: 50%;
    margin-left: 10px;
}
.user-bar .actions {
  float: right;
  margin: 0 0 0 20px;
}
.user-bar .actions.more {
  margin: 0 12px 0 32px;
}
.user-bar .actions.attachment {
  margin: 0 0 0 30px;
}
.user-bar .actions.attachment i {
  display: block;
  transform: rotate(-45deg);
}
.user-bar .avatar {
  margin: 0 0 0 5px;
  width: 36px;
  height: 36px;
}
.user-bar .avatar img {
  border-radius: 50%;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-bar .name {
  font-size: 17px;
  font-weight: 600;
  text-overflow: ellipsis;
  letter-spacing: 0.3px;
  margin: 0 0 0 8px;
  overflow: hidden;
  white-space: nowrap;
  width: 150px;
}
.user-bar .status {
  display: block;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
}

.disabled\:opacity-50:disabled {
    opacity: 100%;
}
</style>
<script>
function criarBarra() {
  var userBar = document.createElement("div");
  userBar.className = "user-bar";
  var icone_botao_voltar = document.createElement("div");
  icone_botao_voltar.className = "back";
  icone_botao_voltar.innerHTML = '<i class="zmdi zmdi-arrow-left"></i>';
  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="https://www.almerisat.com/jorge.jpg" alt="Avatar">';
  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span>Cardilogia</span> <span data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span><span class="status">Online</span>';
  var icone_camera = document.createElement("div");
  icone_camera.className = "actions";
  icone_camera.style.float = "right";
  icone_camera.innerHTML = '<i class="zmdi zmdi-videocam" style="background-color: transparent;"></i>';
  var icone_telefone = document.createElement("div");
  icone_telefone.className = "actions";
  icone_telefone.style.float = "right";
  icone_telefone.innerHTML = '<i class="zmdi zmdi-phone" style="background-color: transparent;"></i>';
  var icone_mais = document.createElement("div");
  icone_mais.className = "actions more";
  icone_mais.style.float = "right";
  icone_mais.innerHTML = '<i class="zmdi zmdi-more-vert" style="background-color: transparent;"></i>';
  userBar.appendChild(icone_botao_voltar);
  userBar.appendChild(avatar);
  userBar.appendChild(name);
  userBar.appendChild(icone_mais);
  userBar.appendChild(icone_telefone);
  userBar.appendChild(icone_camera);
  var elementoPai = document.querySelector("#__next");
  if (elementoPai) {
    elementoPai.insertBefore(userBar, elementoPai.firstChild);
  }
}
criarBarra();
</script>
<script>
  const botBody = document.querySelector('typebot-standard')
        .shadowRoot.querySelector('.typebot-container');
  const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
  const status = document.querySelector('.status');
  const audioNot = document.createElement('audio');
  audioNot.src = 'https://s3.typebot.io/public/workspaces/clxgpan6q000rljk8iyy6q66x/typebots/clxgpawpm000p10ew33m2mf3l/blocks/o6lzakgjf9az8tg6tyfk29lf?v=1718491238886';
  let mensagesLength = 0;
  createInfoMessage();
  function createInfoMessage() {
    const message= "Esta é uma conta comercial";
    const div = document.createElement('div');
    const infoHTML = `<div style="display: flex; align-items: center; gap: 4px; background-color: #d5f4f0; border-radius: 10px; padding: 10px; width: fit-content; max-width: 450px; margin: 2rem auto .5rem;" class="info-container">
      <div>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4b5e63" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path>
        </svg>
      </div>
      <p style="color: #53676b;">${message}</p>
    </div>`;
    div.innerHTML = infoHTML;
    const messagesContainer = botBody.querySelector('.typebot-chat-view');
    messagesContainer.insertBefore(div, messagesContainer.firstChild);
  }
  setInterval(() => {
      const isTyping = botBody.querySelector('.bubble1');
      const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
      if(isTyping && sibling.src) {
        status.innerText = 'gravando audio...'
      } else if(isTyping) {      
        status.innerText = 'digitando...'
      } else {
        status.innerText = 'Online'
      }
      const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
      if(allMessages.length > mensagesLength) {        
        if(!isTyping) {
          for (let i = mensagesLength; i < allMessages.length; i++) {
            const iconContainer = document.createElement('div');
            const checkIcon = `<svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 0;right: 5px;" height="20" width="18">
              <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
                <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
                <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
              </g>
            </svg>`;
            iconContainer.innerHTML = checkIcon;
            const currentMsg = allMessages[i];
            currentMsg.append(iconContainer);
          }
          mensagesLength = allMessages.length;
          audioNot.play();        
        }
      }
    }, 400)
</script>
