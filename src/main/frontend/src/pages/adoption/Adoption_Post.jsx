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


const Adoption_Post = () => {

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
                    <p className={postst.post_nick}>&nbsp;&nbsp;닉네임&nbsp;:&nbsp; 테트장인덴버</p>
                    <p className={postst.post_postnum}> 글번호 &nbsp;:&nbsp; 25</p>
                    <p className={postst.post_date}>작성일&nbsp;:&nbsp; 2024-11-20 </p>
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
                                <td className={`${postst.post_td2}`}>강아지</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>품종</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>믹스견</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>공고번호</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>1004</td>
                            </tr>
                        </table>
                        <table className={`${postst.post_table} ${postst.post_tb}`}>
                            <tr className={`${postst.post_tb}`}>
                                <td className={`${postst.post_td1}`}>공고마감날짜</td>
                            </tr>
                            <tr>
                                <td className={`${postst.post_td2}`}>2024-12-18</td>
                            </tr>
                        </table>
                    </div>
                </div>


                <ul className={postst.post_petif}>
                    <li className={postst.post_petif_p1}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600" }}>털색</span>
                        <span style={{fontSize : "1.6rem"}}>&nbsp;&nbsp; :</span> &nbsp;&nbsp;&nbsp;흰색
                    </li>
                    <li className={postst.post_petif_p2}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>체중</span>
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; 10kg ?
                    </li>
                    <li className={postst.post_petif_p3}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>나이</span>  
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;3개월쯤
                    </li>
                    <li className={postst.post_petif_p4}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>발견장소</span> 
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; 가산디지털단지 7번출입구
                    </li>
                    <li className={postst.post_petif_p5}>
                        <span style={{fontSize : "1.6rem", fontWeight: "600"}}>특징</span>
                        &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; 귀여움
                    </li>
                </ul>
            </article>
        </div>
    )
}

export default Adoption_Post;
