'use client'
import Mission from '@/components/icons/Mission'
import Values from '@/components/icons/Values'
import Vision from '@/components/icons/Vision'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Business = () => {
  const path = usePathname()
  return (
    <section>
      <div className='relative w-full h-[55vh] lg:h-[70vh] '>
        {/* <Image
                    src='/assets/bg2-remove.jpeg'
                    alt='img'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className='w-full h-full'
                    sizes="(max-width: 600px) 150vw,
               (max-width: 1200px) 50vw,
               "
                /> */}
        <div className='mainImage' />
        <div className='absolute inset-0 bg-black  bg-opacity-50' />
        <div className='absolute  w-full top-32 lg:top-64 '>
          <div className=' border-t-[1px] mx-32  border-gray-400 bg-opacity-30' />
          <div className='lg:flex items-center text-center lg:mx-32 justify-between'>
            <h1 className='text-4xl text-white font-semibold py-10'>About Us</h1>
            <div className='text-white text-[13px] flex justify-center items-center lg:block'>{path?.startsWith('/') && (<div className='flex items-center gap-2'><svg width={16} className='fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg><Link href={'/'} className='hover:text-primary_Color_Light'>Home</Link> <span>/</span><span>{path.split('/')}</span></div>)}</div>
          </div>
        </div>
      </div>

      <div className='lg:mx-28 py-20'>

        <div className='text-center'>
          <h3 className='text-4xl'>Our Philosophy</h3>
          <p className='text-[17px] py-4 text-gray-600 mx-10'>The business roots of Class A Food Industries are built upon strategic vision, supported by a clear mission under customized corporate unique values, that reflect our beliefs, company culture and business philosophy. It helps us to ensure that company leaders and employees all have the same understanding for our main strategic objectives. Our business philosophy focuses on innovation, introducing value added products for our customers and partners, in addition to creating a culture of exclusiveness, and moving the market with needed agility for our customers benefit.</p>
        </div>

        <div className='text-center'>
          <h3 className='text-3xl lg:text-4xl py-10 px-3 lg:px-0'>Our Vision , Mission and Values</h3>



          <div className='lg:flex gap-10 mx-3 lg:mx-0'>
            {/* vision */}
            <div className='lg:w-1/2 border-gray-300 border-[1px] rounded-lg text-center p-5'>
              <Vision />
              <h4 className='font-semibold text-xl'>Vision</h4>
              <p className='text-[16px] text-gray-600 py-3'>Innovations & Integration to lead the market.
                Becoming an integrated institutionalized industrial group in the biscuit and confectionery market & final innovative products.
              </p>
            </div>

            {/*  */}
            <div className='lg:w-1/2 mt-5 lg:mt-0 border-gray-300 border-[1px] rounded-lg text-center p-5'>
              <Mission />
              <h4 className='font-semibold text-xl'>Mission</h4>
              <p className='text-[16px] text-gray-600 py-3'>Our focus is to meet consumer expectations through high-quality innovative products with genuine ingredients, appearances, and taste experience. We continuously strive for exceptional performance through sustainable practices and corporate responsibility to the benefit of all stakeholders.  </p>
            </div>

          </div>

          <div className=' mx-3 lg:mx-0 border-gray-300 border-[1px] rounded-lg text-center p-5 my-10 '>
            <Values />
            <h3 className='text-2xl font-semibold py-3'>Values</h3>

            <div className='lg:flex gap-10 '>
              <ul className='text-start'>
                <li className='py-3'>
                  <h4 className='text-lg font-semibold'>.Innovation & Creativity </h4>
                  <p className='text-[16px] text-gray-700 py-2'>
                    Innovation & Creativity penetrates our business to the deep core.
                  </p>
                </li>


                <li className='py-3'>
                  <h4 className='text-lg font-semibold'>.First Mover </h4>
                  <p className='text-[16px] text-gray-700 py-2'>

                    Being the first movers by introducing an innovative product is our focus.
                  </p>
                </li>


                <li className='py-3'>
                  <h4 className='text-lg font-semibold'>.Sustainability</h4>
                  <p className='text-[16px] text-gray-700 py-2'>
                    Our commitment to becoming a sustainable business.
                    Four pillars keep our business sustainability:

                  </p>
                  <ul>
                    <li className='text-[15px] text-gray-600 '>•	Integration with our organizations purpose,

                      <li className='text-[15px] text-gray-600 '>• Educate & empower our people,
                      </li>
                      <li className='text-[15px] text-gray-600 '>•	Engage & collaborate with our stakeholders and partners.</li>
                    </li>              <li className='text-[15px] text-gray-600 '>•	Align into our operations,</li>
                  </ul>



                </li>

              </ul>

              <ul className='text-start'>
                <div className='py-3'>
                  <h4 className='text-lg font-semibold'>.Agility </h4>
                  <p className='text-[16px] text-gray-700 py-2'>We will remain agile.</p>
                </div>

                <div className='py-3'> <h4 className='text-lg font-semibold'>.Quality </h4>
                  <p className='text-[16px] text-gray-700 py-2'>Highest possible standards are our credo.</p></div>

                <div className='py-3'>
                  <h4 className='text-lg font-semibold'>.Respect</h4>
                  <p className='text-[16px] text-gray-700 py-2'> We treat our employees family members, customers, and stakeholders with respect.</p>
                </div>

                <div>
                  <h4 className='text-lg font-semibold'>7.Loyalty </h4>
                  <p className='text-[16px] text-gray-700 py-2'>Loyalty is a fundamental aspect of our business.</p>
                </div>


                <div>
                  <h4 className='text-lg font-semibold'>.Teamwork </h4>
                  <p className='text-[16px] text-gray-700 py-2'>We won together. </p>
                </div>
              </ul>
            </div>

          </div>
        </div>


      </div>

    </section>
  )
}

export default Business


// values
{/* <svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width={64}
  height={64}
  viewBox="0 0 16.933333 16.933334"
  version="1.1"
  id="svg8"
  inkscape:version="0.92.3 (2405546, 2018-03-11)"
  sodipodi:docname="19-Value.svg"
  inkscape:export-filename="/home/wanzabuyumna/@WANZ_DESIGN/NICON STUDIO MAGANG/Style Line/Style Line/Icon 8/Icon 8.png"
  inkscape:export-xdpi={96}
  inkscape:export-ydpi={96}
>
  <defs id="defs2" />
  <sodipodi:namedview
    id="base"
    pagecolor="#ffffff"
    bordercolor="#959595"
    borderopacity={1}
    inkscape:pageopacity={0}
    inkscape:pageshadow={2}
    inkscape:zoom="5.6000001"
    inkscape:cx="7.2506715"
    inkscape:cy="4.1151306"
    inkscape:document-units="px"
    inkscape:current-layer="layer1"
    inkscape:document-rotation={0}
    showgrid="false"
    units="px"
    inkscape:window-width={1920}
    inkscape:window-height={1040}
    inkscape:window-x={0}
    inkscape:window-y={0}
    inkscape:window-maximized={1}
    inkscape:pagecheckerboard={0}
  />
  <metadata id="metadata5">
    <rdf:rdf>
      <cc:work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:work>
    </rdf:rdf>
  </metadata>
  <g inkscape:label="19-Value" inkscape:groupmode="layer" id="layer1">
    <path
      style={{
        color: "#000000",
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        fontSize: "medium",
        lineHeight: "normal",
        fontFamily: "sans-serif",
        fontVariantLigatures: "normal",
        fontVariantPosition: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantAlternates: "normal",
        fontFeatureSettings: "normal",
        textIndent: 0,
        textAlign: "start",
        textDecoration: "none",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "#000000",
        letterSpacing: "normal",
        wordSpacing: "normal",
        textTransform: "none",
        writingMode: "lr-tb",
        direction: "ltr",
        textOrientation: "mixed",
        dominantBaseline: "auto",
        baselineShift: "baseline",
        textAnchor: "start",
        whiteSpace: "normal",
        shapePadding: 0,
        clipRule: "nonzero",
        display: "inline",
        overflow: "visible",
        visibility: "visible",
        opacity: 1,
        isolation: "auto",
        mixBlendMode: "normal",
        colorInterpolation: "sRGB",
        colorInterpolationFilters: "linearRGB",
        solidColor: "#000000",
        solidOpacity: 1,
        vectorEffect: "none",
        fill: "#000000",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: "0.529167",
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        colorRendering: "auto",
        imageRendering: "auto",
        shapeRendering: "auto",
        textRendering: "auto",
        enableBackground: "accumulate"
      }}
      d="M 8.2020767,0.79685058 V 1.5916335 c 0,0.176432 0.1322901,0.264584 0.26459,0.264584 0.1322901,0 0.2645801,-0.08815 0.2645801,-0.264584 V 0.79685058 c 0.002,-0.14617401 -0.1153101,-0.26609601 -0.2645801,-0.26768401 -0.1492801,0.0016 -0.2662399,0.12151 -0.26459,0.26768401 z m -1.54202,0.68367902 0.56069,0.560689 c 0.2501101,0.249994 0.62528,-0.1251771 0.3751701,-0.3751711 l -0.56276,-0.5606889 c -0.0498,-0.05121 -0.11821,-0.08009 -0.1896502,-0.080099 -0.23818,3.29e-5 -0.35507,0.2901109 -0.1834499,0.45527 z M 9.9001668,1.1053606 9.3374067,1.6660495 c -0.2501098,0.249994 0.1250601,0.6251651 0.3751702,0.3751711 l 0.5606901,-0.560689 c 0.17162,-0.165159 0.0547,-0.455237 -0.18345,-0.45527 -0.0714,2.9e-6 -0.1398403,0.028889 -0.1896502,0.080099 z m -5.35523,1.5404721 c -0.2819601,0 -0.5472001,0.141278 -0.7069302,0.3736209 L 1.2810565,6.7380898 c -0.0553,0.08034 -0.0919,0.1730798 -0.10697,0.258382 -0.48980993,0.356462 -0.64491993,0.937396 -0.64491993,1.3802781 v 2.2520591 c 0,0.418053 0.21348,1.044116 0.41134001,1.603519 0.0988998,0.279701 0.19962002,0.55081 0.27079002,0.777214 0.0839,0.266876 0.1111,0.420148 0.1111,0.486792 v 0.261999 c -0.14349,0.0039 -0.2638701,0.121559 -0.26355,0.2651 v 2.115117 c -5.61e-4,0.14612 0.1174299,0.265032 0.26355,0.265617 h 4.2343701 c 0.1461201,-5.82e-4 0.2641,-0.119497 0.2635499,-0.265617 v -2.115117 c 5.292e-4,-0.128401 -0.0953,-0.238651 -0.2216999,-0.261482 0.0334,-0.06381 0.0748,-0.128734 0.1297101,-0.222726 0.0882,-0.150814 0.18928,-0.343987 0.2609699,-0.604097 l 2.2582601,2.563668 c 0.0717,0.09285 0.1634799,0.111621 0.2191099,0.111621 0.0556,0 0.1557102,-0.02394 0.2191001,-0.111621 l 2.2582602,-2.563668 c 0.0717,0.26011 0.17282,0.453283 0.26097,0.604097 0.0549,0.09399 0.0963,0.158916 0.12971,0.222726 -0.12635,0.02283 -0.22222,0.133081 -0.22169,0.261482 v 2.115117 c -5.55e-4,0.14612 0.11743,0.265035 0.26355,0.265617 h 4.23436 c 0.14612,-5.82e-4 0.26411,-0.119497 0.26355,-0.265617 v -2.115117 c 3.18e-4,-0.143541 -0.12006,-0.2612 -0.26355,-0.2651 v -0.261999 c 0,-0.06664 0.0272,-0.219916 0.11111,-0.486792 0.0712,-0.226404 0.17185,-0.497513 0.27078,-0.777214 0.19787,-0.559403 0.41135,-1.185466 0.41135,-1.603519 V 8.3767499 c 0,-0.4428821 -0.15512,-1.0238161 -0.64493,-1.3802781 -0.0151,-0.0853 -0.0517,-0.1780392 -0.10697,-0.258382 l -2.55695,-3.7186362 c -0.15973,-0.2323429 -0.42497,-0.3736209 -0.70693,-0.3736209 -2.6144802,0.0015 -5.2289702,6.879e-4 -7.8434502,0 z m 0,0.5291669 2.1709298,5.292e-4 -1.85157,3.7052002 H 1.8252065 L 4.2751867,3.318144 c 0.0613,-0.08923 0.1614699,-0.1431442 0.2697501,-0.1431444 z m 7.8434502,0 c 0.10828,0 0.20841,0.05392 0.26975,0.1431442 l 2.44998,3.5625731 h -3.03909 l -1.85157,-3.7052002 z m -5.0797902,10e-4 c 0.7720399,7.673e-4 1.5440901,3.439e-4 2.31613,0 L 11.477327,6.8806829 H 5.4559967 Z M 1.8929065,7.4103677 H 4.8513767 L 7.5990167,13.960873 3.4220068,9.2164599 C 3.3381066,8.5936368 2.9910266,8.1715988 2.5977666,8.0118818 c -0.0805,-0.03271 -0.1648199,-0.05059 -0.24908,-0.05994 z m 3.5320803,0 H 11.508337 L 8.4666667,14.661605 Z m 6.6569602,0 h 2.95847 l -0.45578,0.5415701 c -0.0843,0.0094 -0.16853,0.02723 -0.24908,0.05994 -0.39325,0.1597171 -0.74032,0.581755 -0.82424,1.2045781 L 9.3343069,13.960869 Z M 1.7978165,8.1188518 c -0.13215,0.124869 -0.2098,0.3093069 -0.2098,0.535368 v 1.9316652 c 0,0.352864 0.5291601,0.352864 0.5291601,0 V 8.6542198 c 0,-0.09926 0.0287,-0.145324 0.0625,-0.1638139 0.0338,-0.018489 0.11227,-0.03182 0.21859,0.011369 0.21266,0.08637 0.4941701,0.3784039 0.5116001,0.954981 V 10.58382 c 0,0.220236 0.1114199,0.395298 0.22686,0.535368 0.11544,0.140068 0.2464599,0.263865 0.3689699,0.402041 0.2283402,0.257548 0.4616802,0.590148 0.46302,1.179773 0.00101,0.352865 0.5305002,0.350795 0.5291701,-0.0021 -0.00201,-0.730489 -0.2915499,-1.184145 -0.5973799,-1.529095 -0.1417,-0.159826 -0.2730101,-0.286403 -0.3555402,-0.38654 -0.0825,-0.100141 -0.1054198,-0.15513 -0.1054198,-0.199475 v -0.54467 l 2.10272,2.387968 c -0.0399,0.415206 -0.1513301,0.642075 -0.27079,0.84646 -0.0836,0.143085 -0.1868302,0.295854 -0.2408102,0.484209 H 1.8520465 v -0.261416 c 0,-0.197942 -0.0588,-0.401393 -0.13539,-0.644922 -0.0765,-0.243537 -0.17794,-0.517687 -0.2759499,-0.794793 -0.19603,-0.554213 -0.3818901,-1.10435 -0.3818901,-1.427819 V 8.3767499 c 0,-0.2572041 0.0719,-0.5765501 0.2728651,-0.8108192 z M 15.601627,7.5659147 c 0.20092,0.2342531 0.27285,0.5535991 0.27285,0.8108032 v 2.2520591 c 0,0.323469 -0.18586,0.873606 -0.38189,1.427819 -0.098,0.277106 -0.1994,0.551256 -0.27595,0.794784 -0.0765,0.243529 -0.13539,0.44698 -0.13539,0.644922 v 0.261483 h -3.17862 c -0.054,-0.188354 -0.15718,-0.341124 -0.24081,-0.484209 -0.11946,-0.204385 -0.23094,-0.431253 -0.27078,-0.84646 l 2.10271,-2.387968 v 0.54467 c 0,0.04434 -0.0229,0.09933 -0.10542,0.199471 -0.0825,0.100137 -0.21383,0.226714 -0.35553,0.38654 -0.30584,0.34495 -0.59568,0.798607 -0.59738,1.529106 -10e-4,0.352894 0.52786,0.354931 0.52916,0.0021 10e-4,-0.589625 0.23468,-0.922224 0.46302,-1.179773 0.12251,-0.138176 0.25353,-0.261973 0.36897,-0.402041 0.11544,-0.14007 0.22686,-0.315132 0.22686,-0.535369 V 9.456774 c 0.0174,-0.5765771 0.29894,-0.8686109 0.5116,-0.954981 0.10633,-0.04318 0.18479,-0.02986 0.21859,-0.011369 0.0338,0.018489 0.0625,0.06456 0.0625,0.1638138 v 1.9316662 c 0,0.352864 0.52917,0.352864 0.52917,0 V 8.6542377 c 0,-0.22606 -0.0777,-0.4104978 -0.20981,-0.5353669 z M 1.5880165,14.286951 h 3.7031302 v 1.588017 H 1.5880165 Z m 10.0541605,0 h 3.70314 v 1.588017 h -3.70314 z"
      id="path1831"
      inkscape:connector-curvature={0}
      sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
    />
  </g>
</svg> */}

// mission
{/* <svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="512px"
  height="512px"
  viewBox="0 0 512 512"
  style={{ enableBackground: "new 0 0 512 512" }}
  xmlSpace="preserve"
>
  <g id="B_-_102_x2C__target_x2C__Aim_x2C__archive_x2C__business_x2C__goal_x2C__mission_x2C__success">
    <g>
      <g>
        <path
          d="M246.094,417.716c-99.123,0-179.765-80.646-179.765-179.774S146.971,58.168,246.094,58.168
				s179.765,80.646,179.765,179.773S345.217,417.716,246.094,417.716z M246.094,65.362c-95.156,0-172.572,77.419-172.572,172.58
				c0,95.162,77.416,172.581,172.572,172.581s172.571-77.419,172.571-172.581C418.665,142.781,341.25,65.362,246.094,65.362z"
        />
      </g>
      <g>
        <path
          d="M246.094,365.63c-70.379,0-127.637-57.28-127.637-127.688c0-70.367,57.258-127.615,127.637-127.615
				c70.395,0,127.665,57.248,127.665,127.615C373.759,308.35,316.488,365.63,246.094,365.63z M246.094,117.52
				c-66.413,0-120.443,54.021-120.443,120.422c0,66.441,54.031,120.495,120.443,120.495c66.429,0,120.472-54.054,120.472-120.495
				C366.565,171.541,312.522,117.52,246.094,117.52z"
        />
      </g>
      <g>
        <path
          d="M246.094,320.353c-45.437,0-82.402-36.97-82.402-82.411c0-45.441,36.965-82.411,82.402-82.411
				c45.438,0,82.403,36.969,82.403,82.411C328.497,283.383,291.531,320.353,246.094,320.353z M246.094,162.725
				c-41.47,0-75.209,33.742-75.209,75.217s33.739,75.217,75.209,75.217c41.471,0,75.21-33.742,75.21-75.217
				S287.564,162.725,246.094,162.725z"
        />
      </g>
      <g>
        <path
          d="M246.094,277.093c-21.591,0-39.157-17.563-39.157-39.151c0-21.592,17.566-39.158,39.157-39.158
				c21.592,0,39.158,17.566,39.158,39.158C285.252,259.53,267.686,277.093,246.094,277.093z M246.094,205.978
				c-17.625,0-31.964,14.339-31.964,31.964c0,17.622,14.339,31.958,31.964,31.958s31.965-14.336,31.965-31.958
				C278.059,220.317,263.719,205.978,246.094,205.978z"
        />
      </g>
      <g>
        <path
          d="M367.797,475.22c-0.272,0-0.547-0.031-0.82-0.095l-35.24-8.254c-0.928-0.218-1.732-0.794-2.235-1.604l-35.269-56.782
				c-0.59-0.95-0.704-2.121-0.31-3.167c0.396-1.047,1.255-1.851,2.325-2.174c8.383-2.53,16.602-5.732,24.429-9.518
				c1.665-0.807,3.673-0.215,4.637,1.367l45.377,74.467c0.454,0.602,0.724,1.351,0.724,2.163c0,1.979-1.599,3.585-3.575,3.597
				C367.824,475.22,367.811,475.22,367.797,475.22z M334.826,460.207l25.432,5.956l-39.405-64.667
				c-5.86,2.697-11.911,5.082-18.068,7.123L334.826,460.207z"
        />
      </g>
      <g>
        <path
          d="M122.083,475.22c-1.137,0-2.227-0.54-2.913-1.487c-0.85-1.174-0.913-2.743-0.158-3.981l45.556-74.759
				c0.963-1.581,2.97-2.173,4.637-1.366c7.853,3.798,16.088,6.999,24.479,9.516c1.073,0.322,1.935,1.126,2.331,2.174
				s0.281,2.221-0.311,3.172l-35.328,56.782c-0.503,0.809-1.306,1.385-2.233,1.602l-35.24,8.254
				C122.63,475.188,122.355,475.22,122.083,475.22z M169.028,401.496l-39.406,64.667l25.433-5.957l32.092-51.581
				C180.977,406.59,174.909,404.203,169.028,401.496z"
        />
      </g>
      <g>
        <path
          d="M318.765,444.364H208.284c-1.986,0-3.597-1.61-3.597-3.597s1.61-3.597,3.597-3.597h110.481
				c1.986,0,3.597,1.61,3.597,3.597S320.751,444.364,318.765,444.364z"
        />
      </g>
      <g>
        <path
          d="M94.295,241.539c-1.986,0-3.597-1.61-3.597-3.597c0-85.686,69.71-155.396,155.396-155.396
				c1.986,0,3.597,1.61,3.597,3.597s-1.61,3.597-3.597,3.597c-81.719,0-148.202,66.483-148.202,148.202
				C97.892,239.928,96.281,241.539,94.295,241.539z"
        />
      </g>
      <g>
        <path
          d="M394.882,92.742c-0.489,0-0.983-0.1-1.45-0.306c-1.399-0.617-2.255-2.051-2.134-3.576l2.161-27.219
				c0.063-0.811,0.401-1.576,0.957-2.171l20.134-21.55c1.044-1.117,2.681-1.453,4.079-0.835c1.399,0.617,2.255,2.051,2.134,3.576
				l-2.162,27.219c-0.063,0.811-0.401,1.576-0.957,2.171l-20.133,21.55C396.815,92.345,395.857,92.742,394.882,92.742z
				 M400.53,63.463l-1.247,15.703l12.246-13.108l1.248-15.703L400.53,63.463z"
        />
      </g>
      <g>
        <path
          d="M394.882,92.742c-1.323,0-2.558-0.731-3.185-1.927c-0.71-1.354-0.486-3.008,0.558-4.125l20.133-21.55
				c0.557-0.596,1.299-0.985,2.106-1.103l27.059-3.967c1.514-0.224,2.999,0.537,3.708,1.89c0.709,1.354,0.484,3.008-0.559,4.125
				l-20.134,21.542c-0.557,0.595-1.299,0.984-2.105,1.103l-27.058,3.974C395.23,92.729,395.055,92.742,394.882,92.742z
				 M416.784,70.971l-12.26,13.123l15.647-2.298l12.261-13.118L416.784,70.971z"
        />
      </g>
      <g>
        <path
          d="M246.094,241.539c-0.92,0-1.841-0.351-2.543-1.053c-1.405-1.405-1.405-3.682,0-5.086L392.34,86.602
				c1.404-1.405,3.682-1.405,5.086,0c1.405,1.405,1.405,3.682,0,5.086L248.637,240.485
				C247.935,241.188,247.014,241.539,246.094,241.539z"
        />
      </g>
    </g>
  </g>
  <g id="Layer_1"></g>
</svg> */}

// vision
{/* <svg
xmlns="http://www.w3.org/2000/svg"
width={511.972}
height={368.8}
viewBox="0 0 511.972 368.8"
{...props}
>
<path
  data-name="Path 62"
  d="M564.5 401.82c-29.548 41.563-64.833 75.084-104.061 98.02-38.087 22.271-79.839 34.56-123.623 34.56s-85.535-12.289-123.627-34.56c-39.348-23.005-74.731-56.662-104.332-98.4l4.876-3.469-4.894 3.471a6 6 0 01.292-7.323c29.545-41.562 64.832-75.087 104.059-98.021 38.091-22.271 79.844-34.561 123.627-34.561s85.535 12.289 123.627 34.56c39.349 23.007 74.73 56.665 104.333 98.4l-4.877 3.473 4.894-3.471a6 6 0 01-.291 7.322zm-110.1 87.706c36.765-21.495 70.015-52.774 98.14-91.557-28.126-38.783-61.374-70.064-98.14-91.56-36.232-21.183-75.943-32.874-117.58-32.874s-81.349 11.691-117.58 32.875c-36.765 21.495-70.015 52.775-98.139 91.559 28.124 38.783 61.374 70.062 98.139 91.557 36.231 21.183 75.943 32.874 117.58 32.874s81.349-11.689 117.58-32.874z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 63"
  d="M336.817 310.75a87.216 87.216 0 11-61.673 25.545 86.95 86.95 0 0161.673-25.545zm53.189 34.03a75.222 75.222 0 1022.03 53.188 74.985 74.985 0 00-22.03-53.188z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 64"
  d="M324.087 171.6a6 6 0 10-12 0v49.283a6 6 0 1012 0z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 65"
  d="M406.138 179.437a5.992 5.992 0 00-11.577-3.095l-12.755 47.6a5.992 5.992 0 1011.577 3.095z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 66"
  d="M483.36 208.232a5.973 5.973 0 00-10.36-5.953l-24.64 42.681a5.973 5.973 0 1010.358 5.953z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 67"
  d="M550.52 256.076a6 6 0 00-8.485-8.485l-34.847 34.849a6 6 0 008.485 8.485z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 68"
  d="M602.974 319.629a5.973 5.973 0 10-5.953-10.358l-42.679 24.64a5.973 5.973 0 005.953 10.358z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 69"
  d="M242.789 185.269a5.992 5.992 0 10-11.577 3.095l12.755 47.6a5.992 5.992 0 0011.577-3.095z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 70"
  d="M167.793 219.5a5.985 5.985 0 10-10.358 6l24.641 42.679a5.985 5.985 0 1010.358-6z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 71"
  d="M104.242 271.98a6 6 0 00-8.485 8.485l34.843 34.847a6 6 0 108.485-8.485l-34.843-34.847z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 72"
  d="M332.8 366.312a16.436 16.436 0 104.813 11.621 16.386 16.386 0 00-4.813-11.621z"
  fill="#022a32"
  transform="translate(-94 -165.6)"
/>
<path
  data-name="Path 73"
  d="M321.185 349.5a28.433 28.433 0 11-20.106 8.328 28.351 28.351 0 0120.106-8.328z"
  fill="#db5656"
  transform="translate(-94 -165.6)"
/>
</svg> */}