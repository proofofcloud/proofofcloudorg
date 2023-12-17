package bloggy_test

import (
	"testing"

	keepertest "bloggy/testutil/keeper"
	"bloggy/testutil/nullify"
	"bloggy/x/bloggy/module"
	"bloggy/x/bloggy/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		PostList: []types.Post{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PostCount: 2,
		PostyList: []types.Posty{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PostyCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BloggyKeeper(t)
	bloggy.InitGenesis(ctx, k, genesisState)
	got := bloggy.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.PostList, got.PostList)
	require.Equal(t, genesisState.PostCount, got.PostCount)
	require.ElementsMatch(t, genesisState.PostyList, got.PostyList)
	require.Equal(t, genesisState.PostyCount, got.PostyCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
