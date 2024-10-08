import Card from "../../components/Card";

const Game = () => {
    const cards = 4
    return (
        <>
            <section className="flex justify-center flex-col items-center w-screen overflow-hidden">
                <div className="flex justify-center items-center space-x-1 flex-col max-w-[300px] mx-auto">
                    <div className="flex justify-center items-center space-x-1">
                        {Array(cards).fill(0).map((_, index) => (
                            <Card
                                key={index}
                                suit="back"
                                rank="0"
                                className="w-20"
                                style={{
                                    marginLeft: `-${Math.min(index, 1) * 60}px`,
                                }}

                            />
                        ))}
                    </div>
                    <div className="flex flex-col text-center mt-4">
                        <p className="text-xs uppercase font-light text-neutral-400"> Team 2 (25 + 4)</p>
                        <p className="font-semibold flex items-center gap-2 text-white transition-colors"> James Doe</p>
                    </div>
                </div>
                <div className="flex h-[500px] w-full">
                    <div className="flex basis-1/2 justify-center items-center flex-col  max-w-[200px] -translate-x-1/4 mx-auto">
                        {Array(cards).fill(0).map((_, index) => (
                            <Card key={index} suit="back" rank="0" className="w-20 -mt-24" />
                        ))}
                        <div className="flex flex-col text-center mt-4">
                            <p className="text-xs uppercase font-light text-neutral-400"> Team 1 (23 + 4)</p>
                            <p className="font-semibold flex items-center gap-2 text-neutral-400 transition-colors"> James Doe</p>
                        </div>

                    </div>
                    <div className="flex basis-1/2 justify-center items-center  flex-col translate-x-1/4 max-w-[200px] mx-auto">
                        {Array(cards).fill(0).map((_, index) => (
                            <Card key={index} suit="back" rank="0" className="w-20 -mt-24" />
                        ))}
                        <div className="flex flex-col text-center mt-4">
                            <p className="text-xs uppercase font-light text-neutral-400"> Team 1 (23 + 4)</p>
                            <p className="font-semibold flex items-center gap-2 text-neutral-400 transition-colors"> James Doe</p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center items-center space-x-1 flex-col max-w-[300px] mx-auto">
                    <div className="flex justify-center items-center space-x-1">
                        <Card suit="hearts" rank="A" className="w-20" />
                        <Card suit="hearts" rank="A" className="w-20" />
                        <Card suit="hearts" rank="A" className="w-20" />
                        <Card suit="hearts" rank="A" className="w-20" />
                    </div>
                    <div className="flex flex-col text-center mt-4">
                        <p className="text-xs uppercase font-light text-neutral-400"> Team 2 (25 + 4)</p>
                        <p className="font-semibold flex items-center gap-2 text-neutral-400 transition-colors"> James Doe</p>
                    </div>

                </div>


            </section>
            <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col w-screen overflow-hidden">
                <div className="flex justify-center items-center space-x-1">
                    {Array(4).fill(0).map((_, index) => (
                        <Card
                            key={index}
                            suit="hearts"
                            rank="A"
                            className=" w-20"
                            style={{
                                marginLeft: `-${Math.min(index, 1) * 50}px`,
                            }}
                        />
                    ))}
                </div>
                <div className="flex flex-col text-center mt-4">
                    <p className="text-xs uppercase font-light text-neutral-400"> 10 cards</p>
                    <p className="text-sm">Value: <span className="font-semibold">4</span></p>
                </div>


            </section>



        </>

    );
}

export default Game;
