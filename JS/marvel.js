const marvel = {
    render : () => {
        //132f999698e6909c02f9ffdeca2cb3a8c1957980eff98cf35a838581e87b4f5b42e87e8bf
        const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ff98cf35a838581e87b4f5b42e87e8bf&hash=f26b739894986fcceb4e63ae1f712b1d`
        ;
        const container = document.querySelector('#marvel-row');
        let contenHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contenHTML += `<div class="col-nd-4">
                                    <a href="${urlHero}" target="_blank">
                                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                                    </a>
                                <h3 class="tittle">${hero.name}: </h3>
                                 </div>`;
            }
            container.innerHTML = contenHTML
            //console.log(json, 'RES.JSON')
        })
    }

};
marvel.render();
