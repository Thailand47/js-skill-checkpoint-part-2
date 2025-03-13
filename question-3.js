const asyncFunction = async () => {
    try {
        const fet = await fetch("https://jsonplaceholder.typicode.com/users");
        const jasonData = await fet.json();
        // console.log(jasonData);

        const names = jasonData

            .map(nameless => nameless.name)
            // console.log(jasonMap )
            .filter(nameless => nameless === 'Mrs. Dennis Schulist')
        console.log(names)

    } catch (error) {
        console.error(error)

    }

}

asyncFunction()