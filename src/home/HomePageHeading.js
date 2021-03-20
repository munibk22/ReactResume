import React from 'react'
import Info from '../pics/1x/info.png'

export default function HomePageHeading() {
    return (
        <div style={{ width: '100vw' }}>
            <div class="titlebox"
                style={{
                    fontFamily: '',
                    alignItems: '', textAlign: '', paddingLeft: '8%',
                    lineHeight: '4.5rem'
                }}>
                <div className=' ' style={{
                    color: '#ed363b', fontFamily: '',
                    justifyContent: 'center'
                    , alignItems: ''
                }} >
                    <h1><strong> Front and Back End Web Development</strong></h1></div>
                <div style={{ color: '#ed363b', fontFamily: '', marginTop: '2%' }}>
                    <h1>Mobile ready</h1></div>

                <div style={{ marginTop: '2%' }} >

                    < a href='/reactresume' className='btn btn-danger btn-lg '
                        style={{
                            borderRadius: '0rem', marginRight: '5%'
                        }}>
                        Contact Me</a>

                    <a href='/reactresume' className='btn btn-secondary btn-lg '
                        type='button'
                        style={{
                            backgroundColor: 'transparent',
                            borderRadius: '0rem', backgroundImage: `url()`, backgroundRepeat: 'no-repeat'
                        }}>
                        Learn More{ } <img src={Info} alt='' style={{
                            color: 'blue'
                        }} /></a></div>

            </div >

            {/* <div className='relative  flexcontainer' style={{
                fontFamily: 'Fira Code',
                alignItems: 'flex-start', justifyContent: '', textAlign: 'left', paddingLeft: '10%',
                lineHeight: '4.5rem'
            }} >
                <div className=' ' style={{ color: '#ed363b', fontFamily: 'sans-serif', alignItems: 'flex-start' }} >
                    <h1><strong> Front and Back End Web Development</strong></h1>

                    <div style={{ color: '#ed363b', fontFamily: 'Fira Code', marginLeft: '0', marginTop: '5%' }} >
                        <h1>--Mobile ready--</h1> </div>
                    <div className='' style={{ borderRadius: '0rem', alignItems: '', marginTop: '5%' }}>
                        <a href='/reactresume' className='btn btn-danger btn-lg ' style={{ borderRadius: '0rem', marginRight: '15%' }}>
                            Learn More</a>
                        <a href='/reactresume' className='btn btn-dark btn-lg ' style={{ backgroundColor: 'transparent', borderRadius: '0rem' }}>
                            Learn More</a>
                    </div>
                    {/* 
                    <div className=''>
                        <a href='/reactresume' className='btn btn-danger btn-lg '>Learn More</a> </div> *
                </div>


            </div> */}
        </div >
    )
}
