/* eslint-disable no-unused-vars */
// taken from: https://blog.logrocket.com/create-react-native-search-bar-from-scratch/
import NestedVillagesList from './NestedVillagesList'
import VillageSearchBar from './VillageSearchBar'

function VillageTabSimple() {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [clicked, setClicked] = useState(false)
  const [villageData, setVillageData] = useState()

  // // get data from the fake api endpoint
  // useEffect(() => {
  //   const getData = async () => {
  //     const apiResponse = await fetch(
  //       "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
  //     );
  //     const data = await apiResponse.json();
  //     setFakeData(data);
  //   };
  //   getData();
  // }, []);

  filterVillageData = (searchPhrase) => {

  }

  handleSearchTextChange = (searchPhrase) => {
    setSearchPhrase(searchPhrase)
    const filteredVillageData = filterVillageData(searchPhrase)
    setVillageData(filteredVillageData)
  }

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>My Village Data</Text>}
      <VillageSearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={handleSearchTextChange}
        clicked={clicked}
        setClicked={setClicked}
      />

      <NestedVillagesList
        searchPhrase={searchPhrase}
        data={villageData}
        setClicked={setClicked}
      />

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '10%',
  },
})
