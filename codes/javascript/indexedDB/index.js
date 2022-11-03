export function openDB(dbName, version = 1) {
    return new Promise((resolve, reject) => {
      const indexDB = window.indexedDB;
      const request = indexDB.open(dbName, version);
  
      let db;
      request.onsuccess = function (event) {
        if (event !== null) {
          db = (event.target).result;
          console.log("数据库onsuccess连接成功");
          resolve(db);
        }
      };
  
      request.onerror = function (event) {
        reject(event);
        console.log("数据库onerror连接错误");
      };
  
      request.onupgradeneeded = function (event) {
        db = (event.target).result;
        console.log("数据库onupgradeneeded");
        const objectStore = db.createObjectStore("class", {
          keyPath: "uuid",
        });
  
        objectStore.createIndex("uuid", "uuid", { unique: true });
        objectStore.createIndex("name", "name", { unique: false });
        objectStore.createIndex("age", "age", { unique: false });
      };
    });
  }
  
  export function addData(db, storeName, data) {
    console.log("add");
    const request = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName)
      .add(data);
  
    request.onsuccess = function (event) {
      console.log("写入成功");
    };
  
    request.onerror = function (event) {
      console.log("数据写入失败");
    };
  }
  
  export function getDataByKey(db, storeName, key) {
    console.log("get");
    const request = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName)
      .get(key);
  
    request.onerror = function (event) {
      console.log(event);
    };
  
    request.onsuccess = function (event) {
      console.log("success", request.result);
    };
  }
  
  export function getDataByCursor(db, storeName) {
    const list = [];
    const store = db.transaction(storeName, "readwrite").objectStore(storeName);
    const request = store.openCursor();
    request.onsuccess = function (e) {
      const cursor = (e.target).result;
      if (cursor) {
        list.push(cursor.value);
        cursor.continue();
      } else {
        console.log(list);
      }
    };
  }
  
  export function getDataByIndex(
    db,
    storeName,
    indexName,
    indexValue
  ) {
    const store = db.transaction(storeName, "readwrite").objectStore(storeName);
    const request = store.index(indexName).get(indexValue);
    request.onsuccess = function (e) {
      const result = (e.target).result;
      console.log(result);
    };
  }
  
  export function getDataByIndexAndCursor(
    db,
    storeName,
    indexName,
    indexValue
  ) {
    const list = [];
    const store = db.transaction(storeName, "readwrite").objectStore(storeName);
    const request = store
      .index(indexName)
      .openCursor(IDBKeyRange.only(indexValue));
    request.onsuccess = function (e) {
      const cursor = (e.target).result;
      if (cursor) {
        list.push(cursor.value);
        cursor.continue();
      } else {
        console.log(list);
      }
    };
  }
  
  export function cursorGetDataByIndexAndPage(
    db,
    storeName,
    indexName,
    indexValue,
    page,
    pageSize
  ) {
    const list = [];
    let counter = 0;
    let acvanced = true;
    const store = db.transaction(storeName, "readwrite").objectStore(storeName);
    const request = store
      .index(indexName)
      .openCursor(IDBKeyRange.only(indexValue));
    request.onsuccess = function (e) {
      let cursor = e.target.result;
      if (page > 1 && acvanced) {
        acvanced = false;
        cursor.advance((page - 1) * pageSize);
        return;
      }
      if (cursor) {
        list.push(cursor.value);
        counter++;
        if (counter < pageSize) {
          cursor.continue();
        } else {
          cursor = null;
          console.log(list);
        }
      } else {
        console.log(list);
      }
    };
  }
  
  export function updateDB(db, storeName, data) {
    const request = db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .put(data);
  
    request.onsuccess = function () {
      console.log("数据更新成功");
    };
  }
  
  export function deleteDB(db, storeName, id) {
    const request = db
      .transaction([storeName], "readwrite")
      .objectStore(storeName)
      .delete(id);
  
    request.onsuccess = function () {
      console.log("数据删除成功");
    };
  }
  