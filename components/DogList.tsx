import { getDogs } from "@/lib/actions/actions";
import DogCard from "./DogCard";

const DogList = async () => {
  const dogs = await getDogs();

  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col items-center gap-10 py-8 px-5 ">
      {/* <p className="text-heading1-bold py-8">Meet Our Dogs</p> */}
      {!dogs || dogs.length === 0 ? (
        <p className="text-body-bold">No Dogs found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 my-10">
          {dogs.map((dog: DogType) => (
            <DogCard key={dog._id} dog={dog}/>
          ))}
        </div>
      )}
    </div>
    </div>
    
  );
};

export default DogList;
