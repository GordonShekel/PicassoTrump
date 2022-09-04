import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    wrapper: `rounded -lg border dark:border-transparent dark:bg-[#313339]`,
    nftHeader: `flex items-center justify-betwqeen p-4`,
    likesContainer: `flex items-center justify-end space-x-2`,
    heartIcon: `h-5 w-5 text-gray-500 dark:text-gray-400`,
    likesCount: `text-sm font-semibold text-gray-500 dark:text-gray-400`,
    NFTImage: `rounded-b-lg object-cover`
}

const NFTImage = ({image}) => {
    console.log(image)
    return (
        <div className = {style.wrapper}>
            <div className = {style.nftHeader}>
                <Image height ={20} width ={20} src= '/eth-logo.svg' alt='eth' />

                <div className = {style.likesContainer}>
                    <AiOutlineHeart classNAme = {style.heartIcon}/>
                    <div className={style.likesCount}>18</div>
                </div>
            </div>

            <div>
            {image&&<Image
            src ={image}
            width = {448}
            height = {448}
            alt = "nft"
            />}
        </div>            
        </div>
        
    )
}

export default NFTImage