const itActAsFavDataModel = (favData) => {
  it('Should return data that has been added', async () => {
    await favData.putData('foods', { id: 1 });

    expect(await favData.getData('foods', 1)).toEqual({ id: 1 });
    expect(await favData.getData('foods', 3)).toEqual(undefined);
  });

  it('Should not return data that has been deleted', async () => {
    await favData.putData('foods', { id: 1 });

    await favData.deleteData('foods', 1);

    expect(await favData.getData('foods', 1)).toEqual(undefined);
  });

  it('Should not store any data that doesnt have an incorrect property', async () => {
    await favData.putData('foods', { apahayo: 1 });

    expect(await favData.getAllDatas('foods')).toEqual([]);
  });

  it('Should be able to remove a data', async () => {
    await favData.putData('foods', { id: 1 });

    await favData.deleteData('foods', 1);

    expect(await favData.getAllDatas('foods')).toEqual([]);
  });
};

export default itActAsFavDataModel;
