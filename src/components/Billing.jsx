import styles, { layout } from '../style'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradients start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradients end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          For there is a lot of laughter but mass. Mauritian football coaching method neither copper nor the whole road is full of supplies of medicine invest.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="app_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="play_store" className="w-[144px] h-[43px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing