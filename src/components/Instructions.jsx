import Card from './Card';

function Instructions() {
    return (

        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>


    );
}

export default Instructions;