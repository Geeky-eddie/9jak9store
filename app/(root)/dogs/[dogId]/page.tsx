import DogGallery from "@/components/DogGallery"
import DogCard from "@/components/DogCard"
import DogInfo from "@/components/DogInfo"
import { getDogDetails, getOtherDogs } from "@/lib/actions/actions"

const DogDetails = async ({ params }: { params: { dogId: string }}) => {
  const dogDetails = await getDogDetails(params.dogId)
  const relatedProducts = await getOtherDogs(params.dogId)

  return (
    <>
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <DogGallery dogMedia={dogDetails.media} />
      <DogInfo dogInfo={dogDetails} />
    </div>

    <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
      <p className="text-heading3-bold">Other Dogs</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8">
        {relatedProducts?.map((dog: DogType) => (
          <DogCard key={dog._id} dog={dog} />
        ))}
      </div>
    </div>
    </>
  )
}

export const dynamic = "force-dynamic";

export default DogDetails