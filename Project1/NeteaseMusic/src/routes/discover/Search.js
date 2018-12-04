import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import styles from './Search.scss';

@connect(({discover})=>{
  let {songs, songCount} = discover;
  return {
    songs,
    songCount
  }
}, dispatch=>{
  return {
    search: payload=>{
      dispatch({
        type: 'discover/search',
        payload
      })
    }}
  }
)
class Search extends React.PureComponent{
  componentDidMount(){
    // this.props.getRecommendResource();
  }

  search(){
    let search = this.refs.search.value;
    if (search){
      this.props.search(search);
    }
  }

  goPlay(id){
    this.props.history.push('/play', id);
  }

  render(){
    console.log(this.props);
    let {songs} = this.props;
    return <div>
      <input placeholder="要搜索的歌曲" ref="search"></input>
      <button onClick={this.search.bind(this)}>搜索</button>
      <ul>{
        songs.map((item, index)=>{
          return <Link to={`/play/${item.id}`} key={index}>
            <li className={styles.item}>
              <p>{item.name}</p>
              <p>{`${item.artists[0].name}-${item.album.name}`}</p>
            </li>
          </Link>
        })
      }</ul>
    </div>
  }
}

export default Search;
