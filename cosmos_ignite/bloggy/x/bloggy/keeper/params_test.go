package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "bloggy/testutil/keeper"
	"bloggy/x/bloggy/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.BloggyKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
