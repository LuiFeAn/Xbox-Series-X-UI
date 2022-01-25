const Only = (element)=>document.querySelector(element);
const All = (element)=>document.querySelectorAll(element);
const Create = (element)=>document.createElement(element);
const Append = (father,child)=>father.appendChild(child);
const SetAtb = (element,attribute,value)=>element.setAttribute(attribute,value);
const ClassName = (element,classn)=>element.classList.add(classn);
const ClassRemove = (element,classn)=>element.classList.remove(classn);

const NodeGameList = [];

const UI = ()=>{

    const CreateGames = (img)=>{
        const GamesContainer = Only(".games-container");
        const GameContainer = Create("div");
        const GameImg = Create("img");
        Append(GameContainer,GameImg);
        SetAtb(GameImg,"src",img)
        ClassName(GameImg,"game");
        Append(GamesContainer,GameContainer);
        NodeGameList.push(GameImg);
    }
    games.map(element=>CreateGames(element.icon));
    CreateGames();

    const FirstGameSet = ()=>{
        NodeGameList.map((element,id)=>{
            if(id === 0){
                ClassRemove(element,"game");
                ClassName(element,"first-game");
                ClassName(element,"selected-game");
            }
        })
    }
    FirstGameSet();

    const SelectedMove = (Main,Index)=>{
        ClassRemove(Main,"selected-game");
        ClassName(NodeGameList[Index],"selected-game");
    }

    const Inputs = ()=>{
        let index = 0;
        document.body.addEventListener("keyup",(e)=>{
            const MaiNGame = Only(".selected-game");
            switch(e.keyCode){
                case 39:
                index++;
                SelectedMove(MaiNGame,index);
                break;
                case 37:
                index--;
                SelectedMove(MaiNGame,index);
                break;
            }
        })
    }
    Inputs();

    const Hours = ()=>{
        const Hour = Only("#hours");
        const Dt = new Date();
        Hour.innerHTML = `${Dt.getHours()}:${Dt.getMinutes()} PM`
    }
    setInterval(() => {
        Hours();
    }, 100);
}
UI();