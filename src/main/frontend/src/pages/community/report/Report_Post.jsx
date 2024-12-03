import Divider from '../../../components/Divider';
import { Form } from 'react-router-dom';
import React, { Component } from "react";
// import Slider from "react-slick";
import postst from '../Commu_post.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import postimg1 from '../img/postimg1.svg';
import postimg2 from '../../../assets/img2/2.jpg';
import styled from 'styled-components';
import Slideimgs from './Slideimgs';


const Report_Post = () => {

    // const slideimg = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     accessibility: true,
        
    //   };

    return (
        <div className={postst.post_container}>
            <div className={postst.post_title}>
                <h3>&nbsp;체리콕</h3>
            </div>

            <div className={postst.post_tmi}>
                <div className={postst.post_tmi1}>
                    <p className={postst.post_nick}>&nbsp;닉네임: sfsfsf</p>
                    <p className={postst.post_postnum}> 글번호 : 25</p>
                    <p className={postst.post_date}>작성일 : 2024-11-20 </p>
                </div>
                <p className={postst.post_view}>조회수 : 123</p>
            </div>

            <article className={postst.post_content}>
                <div className={postst.post_content1}>

                    {/* 이미지 */}
                    <img src={postimg1} className={postst.post_postimgs}/>
                    {/* <Slideimgs/> */}

                    {/* 테이블 4개 */}
                    <div className={postst.post_pettmi}>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>카테고리</td>
                            </tr>
                            <tr>
                                <td>강아지</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td>품종</td>
                            </tr>
                            <tr>
                                <td>믹스견</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td>공고번호</td>
                            </tr>
                            <tr>
                                <td>1004</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td>공고마감날짜</td>
                            </tr>
                            <tr>
                                <td>2024-12-18</td>
                            </tr>
                        </table>
                    </div>
                </div>


                <div className={postst.post_petif}>
                    <p className={postst.post_petif_p1}>
                        털색: 
                    </p>
                    <p className={postst.post_petif_p2}>
                        체중: 
                    </p>
                    <p className={postst.post_petif_p3}>
                        나이 : 
                    </p>
                    <p className={postst.post_petif_p4}>
                        발견장소 :
                    </p>
                    <p className={postst.post_petif_p5}>
                        특징 : 
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Report_Post;
