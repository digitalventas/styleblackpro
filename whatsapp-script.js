{
    "version": "6",
    "id": "cm1cmtrxd0009c0utaablahv8",
    "name": "Tema Instagram",
    "events": [
        {
            "id": "y3gpb1w4v8jf0ycp1uibryxx",
            "outgoingEdgeId": "cirlc2mn4yoe00fn29wcf9uz",
            "graphCoordinates": {
                "x": 0,
                "y": 0
            },
            "type": "start"
        }
    ],
    "groups": [
        {
            "id": "q4vynk5ce7w7skgsydzt5ed4",
            "title": "Pack Typebot",
            "graphCoordinates": {
                "x": 316.64,
                "y": -59.99
            },
            "blocks": [
                {
                    "id": "iipf7y1uito6yescd7pi4lx7",
                    "type": "text",
                    "content": {
                        "richText": [
                            {
                                "type": "p",
                                "children": [
                                    {
                                        "text": "Informe seu nome"
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "id": "rhhqiopwh7cq5sqcyf0m05zz",
                    "type": "text input",
                    "options": {
                        "labels": {
                            "placeholder": "Informe seu nome aqui!",
                            "button": "Enviar"
                        },
                        "variableId": "vj7urg1zxeqx3v6vk5wb76295",
                        "isLong": false
                    }
                },
                {
                    "id": "sz4e8stoxjt9lqwz98b82vr2",
                    "type": "text",
                    "content": {
                        "richText": [
                            {
                                "type": "p",
                                "children": [
                                    {
                                        "bold": true,
                                        "text": "{{nome}}"
                                    }
                                ]
                            },
                            {
                                "type": "p",
                                "children": [
                                    {
                                        "text": "Bem-vindo ao Mundo da Automa\u00e7\u00e3o com Pack Typebot! \ud83e\udd16"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "edges": [
        {
            "id": "cirlc2mn4yoe00fn29wcf9uz",
            "from": {
                "eventId": "y3gpb1w4v8jf0ycp1uibryxx"
            },
            "to": {
                "groupId": "q4vynk5ce7w7skgsydzt5ed4"
            }
        }
    ],
    "variables": [
        {
            "id": "vj7urg1zxeqx3v6vk5wb76295",
            "name": "nome",
            "isSessionVariable": false
        }
    ],
    "theme": {
        "general": {
            "font": "Open Sans",
            "background": {
                "type": "Color",
                "content": "#000000"
            }
        },
        "chat": {
            "hostAvatar": {
                "isEnabled": true,
                "url": "https:\/\/i.postimg.cc\/Y0bwVbFM\/photo-5048902196283943913-x.jpg"
            },
            "hostBubbles": {
                "backgroundColor": "#262626",
                "color": "#FFFFFF"
            },
            "guestBubbles": {
                "backgroundColor": "#1084f1",
                "color": "#FFFFFF"
            },
            "buttons": {
                "backgroundColor": "#1084f1",
                "color": "#FFFFFF"
            },
            "inputs": {
                "backgroundColor": "#FFFFFF",
                "color": "#000000",
                "placeholderColor": "#28292a"
            },
            "roundness": "medium"
        },
        "customCss": ".typebot-container {\n  background: #000;\n}\n.typebot-chat-view {\n  padding-top: 5.5rem;;\n  padding-bottom: 1rem;\n}\n\n.typebot-input.custom-input {\n  border-radius: 100vw;\n  padding: 0;\n  opacity: 1;\n}\n.typebot-input.custom-input input {\n  padding: 0 0 0 1rem !important;\n}\n.typebot-input > div {\n  width: 100%;\n}\n.user-metadata {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;    \n    color: white;\n    margin-block: 1.5rem;\n}\n.user-metadata img {\n    background-color: black;\n    width: 60px;\n    height: 60px;\n    object-fit: cover;\n    border-radius: 50%;    \n    background: linear-gradient(black, black) padding-box,\n        linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7) border-box;    \n    border: 3px solid transparent;\n    padding: 1px;\n    margin-inline: auto;\n}\n.user-metadata a {\n    text-decoration: none;\n    background-color: #262626;\n    padding: .25rem .75rem;\n    display: inline-block;\n    margin-top: 10px;\n    color: #ddd;\n    border-radius: 2px;\n}\n.primary-info .name {\n    font-weight: bold;\n}\n.secondary-info {\n    opacity: .7;\n}\n.message-input {\n    display: flex;\n    padding: 6px 8px;\n    border-radius: 100vw;\n    border: 2px dashed #707070;\n    justify-content: center;\n    max-width: 100%;\n    width: 100%;\n    margin-inline: auto;\n    \/* position: fixed; *\/\n    bottom: 1rem;\n    left: 0;\n    right: 0;\n    z-index: 9999;\n    background: black;\n    align-items: center;\n}\n.message-input .cam {\n    border-radius: 50%;\n    background-color: #0099fd;\n    display: grid;\n    place-content: center;\n    aspect-ratio: 1;\n    width: 50px;\n}\n.message-input > * {\n    display: flex;\n}\n.message-input .input, \n.message-input input {\n    width: 100%;\n    border: 0;\n    padding-left: .35rem;\n    color: white;\n    font-weight: bold;\n    font-size: 17px;\n    background: transparent;\n}\n.message-input .icons > * {\n    width: 40px;\n    display: grid;\n    place-content: center;\n}\n"
    },
    "selectedThemeTemplateId": "clmr050i8002xtm2tqgx2immr",
    "settings": {
        "general": {
            "isBrandingEnabled": false,
            "isInputPrefillEnabled": true,
            "isHideQueryParamsEnabled": true,
            "rememberUser": {
                "isEnabled": false
            }
        },
        "typingEmulation": {
            "enabled": true,
            "speed": 300,
            "maxDelay": 1.5
        },
        "metadata": {
            "description": "Pack Typebot",
            "imageUrl": "https:\/\/s3.typebot.io\/public\/workspaces\/clxgpan6q000rljk8iyy6q66x\/typebots\/clxgpawpm000p10ew33m2mf3l\/blocks\/dn3s5b59ty059jlumwrc66c2?v=1718507608478",
            "favIconUrl": "https:\/\/s3.typebot.io\/public\/workspaces\/clxgpan6q000rljk8iyy6q66x\/typebots\/clxgpawpm000p10ew33m2mf3l\/blocks\/r3mp6ngy1w256rrywpdaim6l?v=1718507549686",
            "customHeadCode": "<!-- \n\u2554\u2550\u2550\u2550\u2557\u2554\u2550\u2550\u2550\u2557\u2554\u2550\u2550\u2550\u2557\u2554\u2557\u2554\u2550\u2557    \u2554\u2550\u2550\u2550\u2550\u2557\u2554\u2557  \u2554\u2557\u2554\u2550\u2550\u2550\u2557\u2554\u2550\u2550\u2550\u2557\u2554\u2550\u2550\u2557 \u2554\u2550\u2550\u2550\u2557\u2554\u2550\u2550\u2550\u2550\u2557    \n\u2551\u2554\u2550\u2557\u2551\u2551\u2554\u2550\u2557\u2551\u2551\u2554\u2550\u2557\u2551\u2551\u2551\u2551\u2554\u255d    \u2551\u2554\u2557\u2554\u2557\u2551\u2551\u255a\u2557\u2554\u255d\u2551\u2551\u2554\u2550\u2557\u2551\u2551\u2554\u2550\u2550\u255d\u2551\u2554\u2557\u2551 \u2551\u2554\u2550\u2557\u2551\u2551\u2554\u2557\u2554\u2557\u2551    \n\u2551\u255a\u2550\u255d\u2551\u2551\u2551 \u2551\u2551\u2551\u2551 \u255a\u255d\u2551\u255a\u255d\u255d     \u255a\u255d\u2551\u2551\u255a\u255d\u255a\u2557\u255a\u255d\u2554\u255d\u2551\u255a\u2550\u255d\u2551\u2551\u255a\u2550\u2550\u2557\u2551\u255a\u255d\u255a\u2557\u2551\u2551 \u2551\u2551\u255a\u255d\u2551\u2551\u255a\u255d    \n\u2551\u2554\u2550\u2550\u255d\u2551\u255a\u2550\u255d\u2551\u2551\u2551 \u2554\u2557\u2551\u2554\u2557\u2551       \u2551\u2551   \u255a\u2557\u2554\u255d \u2551\u2554\u2550\u2550\u255d\u2551\u2554\u2550\u2550\u255d\u2551\u2554\u2550\u2557\u2551\u2551\u2551 \u2551\u2551  \u2551\u2551      \n\u2551\u2551   \u2551\u2554\u2550\u2557\u2551\u2551\u255a\u2550\u255d\u2551\u2551\u2551\u2551\u255a\u2557     \u2554\u255d\u255a\u2557   \u2551\u2551  \u2551\u2551   \u2551\u255a\u2550\u2550\u2557\u2551\u255a\u2550\u255d\u2551\u2551\u255a\u2550\u255d\u2551 \u2554\u255d\u255a\u2557     \n\u255a\u255d   \u255a\u255d \u255a\u255d\u255a\u2550\u2550\u2550\u255d\u255a\u255d\u255a\u2550\u255d     \u255a\u2550\u2550\u255d   \u255a\u255d  \u255a\u255d   \u255a\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u255d \u255a\u2550\u2550\u255d      \n-->\n<!-- \n\u2729\u2591\u2592\u2593\u2586\u2585\u2583\u2582\u2581 \ud835\udc02\ud835\udc2b\u00e9\ud835\udc1d\ud835\udc22\ud835\udc2d\ud835\udc28\ud835\udc2c: https:\/\/packtypebot.com.br  \u2581\u2582\u2583\u2585\u2586\u2593\u2592\u2591\u2729 \n-->\n<link rel=\"stylesheet\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/material-design-iconic-font\/2.2.0\/css\/material-design-iconic-font.min.css\">\n<script src=\"https:\/\/code.iconify.design\/iconify-icon\/1.0.7\/iconify-icon.min.js\"><\/script>\n<style>\n.hide {\ndisplay: none!important;\n}\ntypebot-standard {\nposition: relative;\nz-index: 9999;\n}\n#__next {\nposition: relative;\nz-index: 9999;\n}\n\/* User Bar *\/\n.user-bar {\nwidth: 100%;\nheight: 100px;\nbackground: #121212;\ncolor: #fff;\npadding: 0;\nfont-size: 25px;\nposition: fixed;\nz-index: 99999;\ndisplay: block;\ntop: 0;\n}\n.user-bar:after {\ncontent: \"\";\ndisplay: table;\nclear: both;\n}\n.user-bar div {\nfloat: left;\ntransform: translateY(-50%);\nposition: relative;\ntop: 50%;\nmargin-left: 10px;\n}\n.user-bar .actions {\nfloat: right;\nmargin: 0 0 0 20px;\n}\n.user-bar .actions.more {\n    margin: 0 0 10px 5%;\n}\n\/* Media query para telas menores, por exemplo, abaixo de 768px *\/\n@media (max-width: 768px) {\n    .user-bar .actions.more {\n        margin: 0 0 1px 1%;\n    }\n}\n.user-bar .actions.attachment {\nmargin: 0 0 0 20px;\n}\n.user-bar .actions.attachment i {\ndisplay: block;\ntransform: rotate(-45deg);\n}\n.user-bar .avatar {\nmargin: 0 0 0 5px;\nbackground-color: black;\nwidth: 50px;\nheight: 50px;\nobject-fit: cover;\nborder-radius: 50%;\nbackground: linear-gradient(black, black) padding-box, linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7) border-box;\nborder: 3px solid transparent;\npadding: 1px;\nwidth: 60px;\nheight: 60px;\n}\n.user-bar .avatar img {\nborder-radius: 50%;\nbox-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\ndisplay: block;\nwidth: 100%;\nheight: 100%;\nobject-fit: cover;\n}\n.user-bar .name {\nfont-size: 17px;\nfont-weight: 600;\ntext-overflow: ellipsis;\nletter-spacing: 0.3px;\nmargin: 0 0 0 8px;\noverflow: hidden;\nwhite-space: nowrap;\nwidth: 150px;\n}\n.user-bar .status {\ndisplay: block;\nfont-size: 13px;\nfont-weight: 400;\nletter-spacing: 0;\n}\n\n.disabled\\:opacity-50:disabled {\nopacity: 100%;\n}\n<\/style>\n<script>\nfunction criarBarra() {\nvar userBar = document.createElement(\"div\");\nuserBar.className = \"user-bar\";\nvar backButton = document.createElement(\"div\");\nbackButton.className = \"back\";\nbackButton.innerHTML = '<iconify-icon icon=\"ep:arrow-up-bold\" rotate=\"270deg\"><\/iconify-icon>';\n\/\/ Adicionando um evento de clique para redirecionar quando o bot\u00e3o de volta for clicado\nbackButton.addEventListener(\"click\", function() {\nwindow.location.href = \"https:\/\/packtypebot.com.br\/\";\n});\nvar avatar = document.createElement(\"div\");\navatar.className = \"avatar\";\navatar.innerHTML = '<img src=\"https:\/\/i.postimg.cc\/Y0bwVbFM\/photo-5048902196283943913-x.jpg\" alt=\"BlackPro\">';\nvar name = document.createElement(\"div\");\nname.className = \"name\";\nname.innerHTML = '<span>BlackPro<\/span> <span data-testid=\"psa-verified\" data-icon=\"psa-verified\" class=\"\"><svg viewBox=\"0 0 18 18\" height=\"18\" width=\"18\" preserveAspectRatio=\"xMidYMid meet\" class=\"\" version=\"1.1\" x=\"0px\" y=\"0px\" enable-background=\"new 0 0 18 18\" xml:space=\"preserve\"><polygon id=\"Star-2\" fill=\"#0099FD\" points=\"9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 \"><\/polygon><polygon id=\"Check-Icon\" fill=\"#FFFFFF\" points=\"13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 \"><\/polygon><\/svg><\/span><span class=\"status\">Online<\/span>';\nvar moreActions = document.createElement(\"div\");\nmoreActions.className = \"actions more\";\n\/\/moreActions.innerHTML = '<i class=\"zmdi zmdi-more-vert\"><\/i>';\nvar attachmentAction = document.createElement(\"div\");\nattachmentAction.className = \"actions attachment\";\nattachmentAction.innerHTML = '<iconify-icon icon=\"pepicons-pop:camera\"><\/iconify-icon>';\nvar phoneAction = document.createElement(\"div\");\nphoneAction.className = \"actions\";\nphoneAction.innerHTML = '<iconify-icon icon=\"tabler:phone\"><\/iconify-icon>';\n\/\/ Adicionando um evento de clique para redirecionar quando o bot\u00e3o de volta for clicado\nphoneAction.addEventListener(\"click\", function() {\nwindow.location.href = \"https:\/\/packtypebot.com.br\/\";\n});\nuserBar.appendChild(backButton);\nuserBar.appendChild(avatar);\nuserBar.appendChild(name);\nuserBar.appendChild(moreActions);\nuserBar.appendChild(attachmentAction);\nuserBar.appendChild(phoneAction);\nvar elementoPai = document.querySelector(\"#__next\");\nif (elementoPai) {\nelementoPai.insertBefore(userBar, elementoPai.firstChild);\n}\n}\ncriarBarra();\n<\/script>\n<script>\n  const botBody = document.querySelector('typebot-standard')\n      .shadowRoot.querySelector('.typebot-container');\n  const userAvatar = botBody.querySelector('img[elementtiming=\"Bot avatar\"]');\n  const status = document.querySelector('.status');\n  createInfoMessage();\n  function createInfoMessage() {\n  const div = document.createElement('div');\n  const infoHTML = `<div>\n  <div class=\"user-metadata\">\n      <div class=\"avatar\">\n          <div>\n              <img src=\"https:\/\/i.postimg.cc\/Y0bwVbFM\/photo-5048902196283943913-x.jpg\" alt=\"avatar\">\n          <\/div>\n          <div class=\"primary-info\">\n              <p class=\"name\">BlackPro<\/p>\n              <p>Instagram \u2022 Nichos<\/p>\n          <\/div>\n          <div class=\"secondary-info\">\n              <p>529 seguidores \u2022 45 publica\u00e7\u00f5es<\/p>\n              <p>Segue voc\u00ea<\/p>\n          <\/div>\n          <a href=\"https:\/\/www.instagram.com\/metodo.nichosblack\/\" target=\"_blank\">Ver Perfil<\/a>\n      <\/div>\n  <\/div>\n<\/div>`;\n  div.innerHTML = infoHTML;\n  const messagesContainer = botBody.querySelector('.typebot-chat-view');\n  messagesContainer.insertBefore(div, messagesContainer.firstChild);\n  }\n  setInterval(() => {\n    const isTyping = botBody.querySelector('.bubble1');\n    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;\n    if(isTyping && sibling.src) {\n      status.innerText = 'gravando audio...'\n    } else if(isTyping) {      \n      status.innerText = 'digitando...'\n    } else {\n      status.innerText = 'Online'\n    }\n    const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    \n  }, 400)\n  <\/script>"
        }
    },
    "createdAt": "2024-09-21T20:58:47.329Z",
    "updatedAt": "2024-09-24T02:14:55.929Z",
    "icon": "https:\/\/s3.typebot.io\/public\/workspaces\/clxgpan6q000rljk8iyy6q66x\/typebots\/clxgpawpm000p10ew33m2mf3l\/blocks\/r3mp6ngy1w256rrywpdaim6l?v=1718507549686",
    "folderId": "cm1fszr5g000a3rd5kusgqwvt",
    "publicId": "tema-instagram-ablahv8",
    "customDomain": null,
    "workspaceId": "mathuza@gmail.com",
    "resultsTablePreferences": null,
    "isArchived": false,
    "isClosed": false,
    "whatsAppCredentialsId": null,
    "riskLevel": null
}
