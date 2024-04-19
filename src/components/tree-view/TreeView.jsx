import MainMenu from './MainMenu';

function TreeView(prop) {

  return (
    <div className="treeView">
      <ul>
        <MainMenu data={prop.data} />
      </ul>
    </div>
  )
}

export default TreeView