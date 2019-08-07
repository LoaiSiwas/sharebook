import React, { Components } from 'react' ;
import AppBar from './Components/Appbar';
import SearchResult from '.Component/SearchResult' ;

class SearchResults extends Components {
    firstSearch() {
        this.searchDirectory(this.itemsRef);
      }
    
    
    
    searchDirectory(itemsRef) {
    
    var searchText = this.state.searchText.toString();
    
    if (searchText == ""){
      this.listenForItems(itemsRef);
    }else{
      itemsRef.orderByChild("searchable").startAt(searchText).endAt(searchText).on('value', (snap) => {
    
        items = [];
        snap.forEach((child) => {
          items.push({
            address: child.val().address,
            firstLetter: child.val().firstLetter,
            title: child.val().title,
          });
        });
    
    
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(items)
        });
    
      });
    }
    
    }

    render() {
        return (
          <View style={styles.container}>
          <ScrollView>
          <SearchBar
              returnKeyType='search'
              lightTheme
              placeholder='Search...'
              onChangeText={(text) => this.setState({searchText:text})}
              onSubmitEditing={() => this.firstSearch()}
          />
            {
              this.state.loading &&
    
              <ActivityIndicator
                size="large"
                color="#3498db"
                style={styles.activityStyle}
              />
    
            }
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
                enableEmptySections={true}
            />
            </ScrollView>
          </View>
        );
      }
    }

export default SearchResaults;