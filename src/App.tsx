import './App.css';
import Note from './components/Note';
import Search from './components/Search';

const labelA = {name: '历史'}
const labelB = {name: '哲学'}
const labelC = {name: '编程技术'}

const testData = [
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA, labelB]
  },
  {
    title: 'abc',
    content: "弗拉米基尔·列宁走出车站，《国际歌》骤然响起。这个昨日还寄居在鞋匠家的人，此刻已被成百上千双手抓住，并被高举至一辆装甲车上。在这里，他第一次向人民发表了演说，接着，震惊的十日开始了，炮弹射出，击中，毁灭了一个旧帝国和旧世界。",
    labels: [labelA, labelB, labelC]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  },
  {
    title: 'abc',
    content: "rails中的javascript\nimportmap  rails7新增命令，无需依赖nodejs即可安装npm包",
    labels: [labelA]
  }
]
function App() {
  return (
    <div className="App">
      <div className="header">
        <Search />

      </div>
      {
        testData.map((data, index) => (
          <Note key={index} title={data.title} content={data.content} labels={data.labels} />
        ))
      }
    </div>
  );
}

export default App;
