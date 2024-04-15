export const renderItems = (data) => {
    const newUl = document.createElement("ul")

    data.forEach(element => {
        console.log(element)
        const newLi = document.createElement("li")
        const newImage = document.createElement("img")
        const cafe = element
        const cappuccino = document.createElement("h5")
        const cappuccinoData = data[1]
        cappuccino.textContent = cappuccinoData.name 

        newImage.setAttribute("src", cafe.imageUrl)
        newLi.appendChild(newImage)
        const cafe2 = document.createElement("h5")
        const cafeZ = element
        cafe2.textContent = cafeZ.name
        cappuccino.appendChild(cafe2)
        newLi.appendChild(cafe2)
        newUl.appendChild(newLi)
    });
    document.body.appendChild(newUl)
    console.log(data)
    //   Aquí comienza tu código y puedes retornar lo que tu necesites
    return 'example';// debe retornar solo newUl 

};

