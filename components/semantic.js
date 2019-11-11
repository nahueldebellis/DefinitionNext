

const Semantic = (props) => {
    console.table(props.tags);
    return (
        <div>
            {
                props.tags.forEach(arrTag=>(
                    <p>
                        {arrTag[0]}  {arrTag[1]}
                    </p>
                ))
            }
        </div>
    );
}

export default Semantic;

