import React from 'react';
import {toSec} from '../../utils/index';
import { Carousel } from 'antd-mobile';

class Lyric extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      times: []
    }
  }

  componentDidMount(){
    console.log(this.props.lyric);
    // 把歌词转成数组
    let lyrics = this.props.lyric.split('\n');
    // 删除最后一项为空的歌词
    lyrics.pop();
    lyrics = lyrics.map((item, index)=>{
      let arr = item.split(']');
      // 如果没有歌词，往后边找三项，补全歌词
      if (!arr[1]){
        for (let i=index+1,len=index+3; i<len; i++){
          let temp = lyrics[i].split(']');
          if (temp[1]){
            arr[1] = temp[1];
            break;
          }
        }
        return arr.join(']');
      }else{
        return item;
      }
    })
    console.log('lyrics...', lyrics);
    this.formatLryic(lyrics);
  }

  formatLryic(lyrics){
    let times = [],
        texts = {};
    lyrics.forEach(item=>{
      let arr = item.replace('[', '').split(']');
      times.push(toSec(arr[0]));
      texts[toSec(arr[0])] = arr[1];
    })

    console.log('times...', times, texts);

  }

  render(){
    return null;
    {/* <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >{
          banners.map((item, index)=>{
            return <img key={index} src={item.imageUrl}/>
          })
        }</Carousel> */}
  }
}

export default Lyric;
