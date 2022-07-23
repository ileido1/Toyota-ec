import Cartmenu from "./sections/cart/cart-menu"
import Cartbanner from "./sections/cart/cart-banner"
import Cartdiseno from "./sections/cart/cart-diseno"
import Cartgaleria from "./sections/cart/cart-galeria"
import Cartexonerados from "./sections/cart/cart-exonerados"
import Carttecnologia from "./sections/cart/cart-tecnologia"
import Cartcta from "./sections/cart/cart-cta"
import Cartslider from "./sections/cart/cart-slider"
import Cartmodelossimilares from "./sections/cart/cart-modelos-similares"
import useFetch from "../hooks/useFetch";
import usePathname from "../hooks/useLocation"
import Modalcotizacion from "./sections/cart/cart-modal-cotizacion"

export default function Sliderscars() {
    var path = (usePathname().replace('/', '').replace('-', ' '))

    return (
        <>

            <Cartmenu />
            <Cartbanner />
            <Cartexonerados />
            <Cartslider />
            <Cartdiseno />
            <Cartgaleria />
            <Carttecnologia />
            <Cartcta />
            <Cartmodelossimilares path={path} />

        </>
    )
}





