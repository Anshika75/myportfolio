"use client";
import React from 'react';
import styles from '../../styles/GradientGalaxy/style.module.css';

const Skills: React.FC = () => {
    const style: Record<string, React.CSSProperties> = {
        container: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
        },
        bg: {
            position: 'absolute',
            top: '-50%',
            left: 0,
            width: '100%',
            height: '150%',
            backgroundImage: "url('https://i.gifer.com/origin/79/79d54f97aa5e1b0681f3039ab5439aed_w200.gif')",
            backgroundSize: 'cover',
            filter: 'blur(45px)',
            overflow: 'hidden',
            transform: 'rotate(180deg)',
            backgroundAttachment: 'fixed',
        },
    };

    return (
        <>
            <div className="flex flex-col px-4 lg:px-20 items-center pb-20 mt-4 relative">
                <div style={style.bg} className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
                <div className="flex flex-row justify-center items-center z-20">
                    <h1 className={`${styles.skygradtext} ${styles.space} ${styles.skyglow} text-2xl lg:text-5xl font-bold`}>Alchemist Abilities</h1>
                    <img className='w-8 lg:w-16 -mt-8 animate-pulse' src="https://www.dropbox.com/scl/fi/ew2mm9nptl7ftvjgr3vz3/Frame-819-2-1.png?rlkey=9wc4rp6de1j4w502nd8l8m8wf&dl=1" alt="" />
                </div>
                <p className={`text-[#f0fbff] text-justify opacity-80 ${styles.space} mt-12 text-sm lg:text-2xl lg:leading-[2.5rem]`}>Embark on a voyage through the mystical realm of my <span className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>coding canvas!</span> I am the <span className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>Script Alchemist</span>, beckoning you to behold the harmonious convergence of skills, where every line is a stroke of brilliance, and every language is a hue in the tapestry of digital enchantment.

                    In this domain where invention waltzes with accuracy, my talents are the arcane elixirs that animate digital fantasies. From <span  className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>HTML</span> to <span  className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>Next.js</span>, each line is a pixel of fervor inscribed onto the parchment of imagination. Let us traverse the binary horizons, transmuting code into a magnum opus and pixels into <span  className={`${styles.skygradtext} ${styles.skyglow} font-semibold`}>indelible adventures</span>! 💻✨ </p>
                    <div className="grid grid-cols-12 place-items-center gap-4 gap-y-8 z-20 w-full mt-12">
                        <img src="https://www.dropbox.com/scl/fi/bpnbmr5dkfmexxwyv0j29/html5.png?rlkey=m707h09sn1afvc3adfhss1zvz&dl=1" className={`w-full ${styles.htmlshadow} transition-all hover:scale-105 cursor-pointer`} alt="" />
                        <img src="https://www.dropbox.com/scl/fi/jx9bnzfjwwqprrqdqfdy3/css3-1.png?rlkey=a8c9rbb247f77ita9mz8jegb9&st=i3fi0c6j&dl=1" className={`w-full ${styles.cssshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/qizb4tak9oj1o3ghnqtgw/js-1.png?rlkey=jo8chkzkz6qq20dwysijwbs7v&st=nyo5sqqn&dl=1" className={`w-full ${styles.jsshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/nz2xcn2i3nngqtpooej2d/reactjs-1.png?rlkey=jdl1afl4mnxrv3bkd5fsnifzy&st=v2dhif06&dl=1" className={`w-full ${styles.reactshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/i6xr1lfdpk1kfskdaz2i5/nextjs2-1.png?rlkey=of2g0uwj9scilzuv0i45avnt5&st=gihmtf9f&dl=1" className={`w-full ${styles.nextshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/7terq35f1bsxkwltw8iu0/bootstrap5-1.png?rlkey=tpadpzk3vnyd7yvbeaxludl78&st=vxqtfsju&dl=1" className={`w-full ${styles.nextshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/l21ipo3laxy9gl9wovf88/sass-1.png?rlkey=cx70wfzo5oqwrzygv6ygve2qi&st=ka1rpicc&dl=1" className={`w-full ${styles.sassshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/cdbrcymk06sc87ulhu1m8/jquery-1.png?rlkey=n0an7mviwq0zkj3vypssb4di0&st=mbdrenah&dl=1" className={`w-full ${styles.jqueryshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/bh1d7ffjtq1b7mho0wph9/tailwindcss-1.png?rlkey=ptlswhz17e3z4lotnefbol8gu&st=k9389vce&dl=1" className={`w-full ${styles.tailwindshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/ye2ne69ff5igglw6xwn2r/flask-1.png?rlkey=i5twh4cnmned9hhw0sxyyaz3t&st=q5gjpvir&dl=1" className={`w-full ${styles.flaskhadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/221p9u3umpqnu7visfkkz/vitejs-1.png?rlkey=ynev3167y2sduzr1u4fpwmm7t&st=k7s2bt0q&dl=1" className={`w-full ${styles.viteshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/dxe2g9c4b0qwu6k4c0c9j/canva-1.png?rlkey=udcbxmcgghpv0x1s83cqsl5ua&st=ugrvk650&dl=1" className={`w-full ${styles.canvashadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/dfz38mnzqecfm0uugii8s/linux-1.png?rlkey=toxzs4czz4xh9i3yo6dwye0so&st=ab3xhrgc&dl=1" className={`w-full ${styles.linuxshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/nenupzfh1bnocf80z1f2t/firebase-1.png?rlkey=n6be4w1pqnn38idapgkj6y75g&st=5sprh4h0&dl=1" className={`w-full ${styles.firebaseshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/oxy0s5u6a7h6rfdjrrox6/mysql-1.png?rlkey=ggj1j8x11p6vxf3vw1xugm67m&st=xkeuxsz6&dl=1" className={`w-full ${styles.sqlshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/8wxx01312dd0pawatkjl8/typescript-1.png?rlkey=wmcyl2hios6h4zj8s28xlo6z5&st=31zgrpo5&dl=1" className={`w-full ${styles.typescriptshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/gm3rtepk3zr1a2i1ndmxx/angular-1.png?rlkey=lrn8gk7z16vgneb7htlgn2mri&st=01gg9xz7&dl=1" className={`w-full ${styles.angularshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/fbtehjxdsdknar2meuuv8/java-1.png?rlkey=db51uclsz19kbj1eknobkk70v&st=sm6anc8d&dl=1" className={`w-full ${styles.javashadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/3eyi445pwwzdp8v3c5ak1/spring-1.png?rlkey=7he17cbhzpky3gnlpzmkw9vpb&st=f3jgymto&dl=1" className={`w-full ${styles.springshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                     <img src="https://www.dropbox.com/scl/fi/zgyfyblyg7w20lmwtobxf/vscode-1.png?rlkey=ewty55bpolt8k00x51bg6ox86&st=enakzri1&dl=1" className={`w-full ${styles.vscodeshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/qrvqrnpc34j8fwhmouelw/wordpress-1.png?rlkey=g4lepx0y8jwuhnkoau17wk260&st=c3lu9sjq&dl=1" className={`w-full ${styles.wordpressshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/uawwfp5n71m9dpqd3i68p/github-1.png?rlkey=mw8nt3p7dye0k74tb4eza79pz&st=d40sdknm&dl=1" className={`w-full ${styles.wordpressshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/sp3l6z7165htcj24o03ky/figma-1.png?rlkey=v768zt0ca2sgf6bguu6f8ysd2&st=r3plobsq&dl=1" className={`w-full ${styles.figmashadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                        <img src="https://www.dropbox.com/scl/fi/sp3l6z7165htcj24o03ky/figma-1.png?rlkey=v768zt0ca2sgf6bguu6f8ysd2&st=r3plobsq&dl=1" className={`w-full ${styles.wordpressshadow} transition-all hover:scale-105 cursor-pointer`}  alt="" />
                    </div>
                <img className='mt-20 animate-pulse h-16 lg:h-32' src="https://www.dropbox.com/scl/fi/tjj8t13ytjrzira6piosy/Vector-392-2-1.png?rlkey=9zhvxurkpceap4amj8hfwnasu&dl=1" alt="" />
            </div>
        </>
    );
};

export default Skills;
